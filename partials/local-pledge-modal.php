<dialog class="pledge-dialog" id="pledgeDialog" onclick="closePledgeOnBackdrop(event)">
    <div class="pledge-dialog-header">
        <h3><span>Sponsor a Girl</span> • 1-Year Agency</h3>
        <button class="btn-dialog-close" onclick="closePledgeModal()" aria-label="Close">✕</button>
    </div>
    <div class="pledge-dialog-body">
        <div class="unit-calc-box">
            <div class="label">
                <span>Adolescent Girls Supported</span>
                <strong id="pledgeSummaryText">1 Girl • $75 USD (~KES 9,750)</strong>
            </div>
            <div class="unit-stepper">
                <button type="button" class="btn-step" onclick="adjustPledgeQty(-1)">−</button>
                <span class="step-count" id="pledgeQtyDisplay">1</span>
                <button type="button" class="btn-step" onclick="adjustPledgeQty(1)">+</button>
            </div>
        </div>

        <div class="gateway-tabs">
            <button type="button" class="gateway-tab-btn active" id="tabMpesa" onclick="switchGatewayTab('mpesa')">
                <i class="ph-bold ph-device-mobile"></i> M-PESA
            </button>
            <button type="button" class="gateway-tab-btn" id="tabCard" onclick="switchGatewayTab('card')">
                <i class="ph-bold ph-credit-card"></i> Visa / Card
            </button>
        </div>

        <div class="payment-panel active" id="panelMpesa">
            <div class="mpesa-details-box">
                <div><div class="val">400200</div><div class="lbl">Business No.</div></div>
                <div><div class="val">MALKIA</div><div class="lbl">Account No.</div></div>
                <div><div class="val" id="mpesaKesTotal">KES 9,750</div><div class="lbl">Total Due</div></div>
            </div>
            <div class="pledge-input-group">
                <label>Phone Number (M-PESA STK Prompt)</label>
                <input type="tel" class="pledge-input" placeholder="0712 345 678" required>
            </div>
            <button type="button" class="pledge-submit-btn">Send M-PESA STK Push</button>
        </div>

        <div class="payment-panel" id="panelCard">
            <div class="pledge-input-group">
                <label>Card Number</label>
                <input type="text" class="pledge-input" placeholder="•••• •••• •••• ••••">
            </div>
            <button type="button" class="pledge-submit-btn" id="btnCardSubmitText">Complete $75 USD Pledge</button>
        </div>
    </div>
</dialog>