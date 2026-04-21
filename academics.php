<?php include('includes/header.php'); ?>

<section class="page-header" style="background: var(--buet-navy); color: #fff; padding: 100px 20px; text-align: center;">
    <div class="container">
        <span class="breadcrumb" style="font-family: 'Space Mono'; color: var(--buet-gold); font-size: 12px; text-transform: uppercase;">Home / Academics</span>
        <h1 style="font-family: 'EB Garamond'; font-size: 48px; margin-top: 10px;">Academic Programs</h1>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="grid" style="grid-template-columns: 1fr 3fr; gap: 40px;">
            <aside class="sidebar">
                <div style="border-left: 2px solid var(--buet-gold); padding-left: 20px;">
                    <h3 style="font-size: 14px; text-transform: uppercase; color: var(--text-light); margin-bottom: 20px;">Curriculum</h3>
                    <ul style="list-style: none; line-height: 2.5;">
                        <li><a href="#undergrad" style="color: var(--buet-navy); font-weight: 600;">Undergraduate (B.Sc.)</a></li>
                        <li><a href="#postgrad" style="color: var(--text-mid);">Postgraduate (M.Sc./Ph.D)</a></li>
                        <li><a href="resources.php" style="color: var(--text-mid);">Academic Calendar</a></li>
                    </ul>
                </div>
            </aside>

            <div class="academic-content">
                <h2 id="undergrad" style="font-family: 'EB Garamond'; font-size: 32px; border-bottom: 1px solid var(--border); padding-bottom: 10px;">Undergraduate Program</h2>
                <p style="margin: 20px 0; color: var(--text-mid);">Our B.Sc. in Chemical Engineering is a 4-year journey. We focus on the core pillars: Transport Processes, Reaction Engineering, and Thermodynamics.</p>

                <div class="level-box" style="background: var(--bg-white); border: 1px solid var(--border); padding: 25px; margin-bottom: 20px;">
                    <h4 style="color: var(--buet-gold);">Level 2 (Sophomore Year)</h4>
                    <p style="font-size: 14px;">Introduction to Material and Energy Balances, Numerical Methods, and Computer Programming (Python).</p>
                </div>

                <div class="level-box" style="background: var(--bg-white); border: 1px solid var(--border); padding: 25px; margin-bottom: 20px;">
                    <h4 style="color: var(--buet-gold);">Level 3 (Junior Year)</h4>
                    <p style="font-size: 14px;">Core specialization in Chemical Reaction Engineering, Mass Transfer, and Heat Transfer operations.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<?php include('includes/footer.php'); ?>