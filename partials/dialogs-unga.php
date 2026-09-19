<!-- DIALOG 1: Champion -->
<dialog class="pledge-dialog action-dialog-styled" id="dialogChampion" onclick="if(event.target===this) this.close()">
    <img src="<?= BASE_URL ?>assets/images/projects/02-sauti-ya-dada.webp" alt="Champion Girls" class="action-dialog-bg">
    <div class="action-dialog-scrim"></div>
    <div class="action-dialog-container">
        <div class="action-dialog-header-row">
            <h3><span>Champion</span> • Policy &amp; Voice</h3>
            <button class="btn-dialog-close" onclick="closeUngaDialog('dialogChampion')" aria-label="Close">✕</button>
        </div>
        <div class="action-dialog-body-bottom">
            <p>
                Amplify the agency, voice, and rights of pastoralist girls by introducing The Malkia Initiative to bilateral desks, UN mission delegates, or gender equity roundtables during UNGA week.
            </p>
            <a href="mailto:info@malkiainitiative.org?subject=UNGA%20Champion%20Connection" class="btn-cta primary" style="width:100%; justify-content:center;">
                <i class="ph-bold ph-envelope"></i>
                <span>Connect via Executive Office</span>
            </a>
        </div>
    </div>
</dialog>

<!-- DIALOG 2: Invite -->
<dialog class="pledge-dialog action-dialog-styled" id="dialogInvite" onclick="if(event.target===this) this.close()">
    <img src="<?= BASE_URL ?>assets/images/projects/05-break-free.webp" alt="Invite Delegation" class="action-dialog-bg">
    <div class="action-dialog-scrim"></div>
    <div class="action-dialog-container">
        <div class="action-dialog-header-row">
            <h3><span>Invite</span> • Bilateral Briefing</h3>
            <button class="btn-dialog-close" onclick="closeUngaDialog('dialogInvite')" aria-label="Close">✕</button>
        </div>
        <div class="action-dialog-body-bottom">
            <p>
                Schedule an in-person bilateral briefing or mission meetup with Executive Director Jedidah Lemaron during the New York UNGA summit to evaluate community co-design models.
            </p>
            <a href="mailto:jeddy@malkiainitiative.org" target="_blank" rel="noopener" class="btn-cta primary" style="width:100%; justify-content:center;">
                <i class="ph-bold ph-envelope-simple-open"></i>
                <span>Direct Email Scheduling</span>
            </a>
        </div>
    </div>
</dialog>

<!-- DIALOG 3: Invest -->
<dialog class="pledge-dialog action-dialog-styled" id="dialogInvest" onclick="if(event.target===this) this.close()">
    <img src="<?= BASE_URL ?>assets/images/projects/06-for-her.webp" alt="Invest Catalytic Capital" class="action-dialog-bg">
    <div class="action-dialog-scrim"></div>
    <div class="action-dialog-container">
        <div class="action-dialog-header-row">
            <h3><span>Invest</span> • Catalytic Capital</h3>
            <button class="btn-dialog-close" onclick="closeUngaDialog('dialogInvest')" aria-label="Close">✕</button>
        </div>
        <div class="action-dialog-body-bottom">
            <p>
                Underwrite direct frontline delivery. Co-design multi-year programmatic grants structured around our 2025–2029 Strategic Plan ($2.0M envelope) with ISA 700 audit verification.
            </p>
            <a href="<?= BASE_URL ?>engagement" class="btn-cta primary" style="width:100%; justify-content:center;">
                <i class="ph-bold ph-handshake"></i>
                <span>Explore Institutional Framework</span>
            </a>
        </div>
    </div>
</dialog>