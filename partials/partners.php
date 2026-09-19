<section class="bento-card col-12 partners-card" id="partners">
    <span class="tag-subtitle">Alliance of Trust</span>
    <h2>Institutional Allies</h2>
    <p>Sustaining ten years of programmatic proof through values-aligned institutional partnerships.</p>

    <div class="partners-grid">
        <?php for ($i = 1; $i <= 9; $i++): $num = str_pad($i, 2, '0', STR_PAD_LEFT); ?>
            <div class="partners-logo-box">
                <img src="assets/images/donors/<?= $num ?>.webp" alt="Donor Partner <?= $num ?>" loading="lazy">
            </div>
        <?php endfor; ?>
    </div>
</section>