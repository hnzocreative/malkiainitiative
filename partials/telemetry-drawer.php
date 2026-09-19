<?php
// Resolve data path safely
$telemetry_path = __DIR__ . '/../data/telemetry.json';
if (!file_exists($telemetry_path)) {
    $telemetry_path = __DIR__ . '/../assets/data/telemetry.json';
}

$all_telemetry = file_exists($telemetry_path) ? json_decode(file_get_contents($telemetry_path), true) : [];

// Determine page key from executed script (e.g., "index", "why-our-work-matters", "kuza")
$current_page_key = basename($_SERVER['SCRIPT_NAME'], '.php');

// Retrieve dataset for this page or fallback to index
$page_telemetry = $all_telemetry[$current_page_key] ?? $all_telemetry['index'] ?? [
    'stats' => [],
    'faqs'  => []
];

$page_stats = $page_telemetry['stats'] ?? [];
$page_faqs  = $page_telemetry['faqs'] ?? [];
?>

<aside class="corporate-telemetry-drawer" id="corporateTelemetryDrawer" aria-label="Supporting Data and FAQs">
    <div class="drawer-header">
        <h3>Field Telemetry</h3>
        <button class="btn-drawer-close" onclick="toggleTelemetry(false)" aria-label="Close">✕</button>
    </div>

    <!-- Dynamic Counters Container -->
    <div id="telemetryCountersWrap" class="telemetry-counters-wrap">
        <?php foreach ($page_stats as $stat): ?>
            <div class="telemetry-counter-item">
                <i class="ph-bold <?= htmlspecialchars($stat['icon']) ?> counter-icon"></i>
                <div class="counter-text-wrap">
                    <span class="counter-label"><?= htmlspecialchars($stat['title']) ?></span>
                    <strong class="counter-value"><?= htmlspecialchars($stat['number']) ?></strong>
                </div>
            </div>
        <?php endforeach; ?>
    </div>

    <!-- Accordion FAQ Supporting AEO Schema -->
    <div class="telemetry-faq-section">
        <h4 class="faq-title">Frequently Answered Inquiries</h4>
        <div class="faq-accordion-group">
            <?php foreach ($page_faqs as $faq): ?>
                <details class="bento-card faq-details">
                    <summary class="faq-summary"><?= htmlspecialchars($faq['question']) ?></summary>
                    <p class="faq-text">
                        <?= htmlspecialchars($faq['answer']) ?>
                    </p>
                </details>
            <?php endforeach; ?>
        </div>
    </div>
</aside>

<?php if (!empty($page_faqs)): ?>
<!-- Dynamic FAQPage Schema for Search & AI Answer Engines (AEO) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    <?php 
    $faq_entities = [];
    foreach ($page_faqs as $faq) {
        $faq_entities[] = json_encode([
            "@type" => "Question",
            "name" => $faq['question'],
            "acceptedAnswer" => [
                "@type" => "Answer",
                "text" => $faq['answer']
            ]
        ], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    }
    echo implode(",\n    ", $faq_entities);
    ?>
  ]
}
</script>
<?php endif; ?>