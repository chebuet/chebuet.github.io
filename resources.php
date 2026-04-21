<?php include('includes/header.php'); ?>

<section class="page-header" style="background: var(--buet-navy); color: #fff; padding: 100px 20px; text-align: center;">
    <div class="container">
        <span class="breadcrumb" style="font-family: 'Space Mono'; color: var(--buet-gold); font-size: 12px; text-transform: uppercase;">Student & Faculty Hub</span>
        <h1 style="font-family: 'EB Garamond'; font-size: 48px; margin-top: 10px;">Resources</h1>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="resource-section" style="margin-bottom: 60px;">
            <h2 style="font-family: 'EB Garamond'; color: var(--buet-navy); border-bottom: 2px solid var(--buet-gold); display: inline-block; padding-bottom: 5px; margin-bottom: 30px;">Computational Tools</h2>
            <div class="grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
                <div class="card" style="padding: 25px; border: 1px solid var(--border); background: var(--bg-white);">
                    <h3 style="font-size: 18px; margin-bottom: 10px;">Python for Engineers</h3>
                    <p style="font-size: 14px; color: var(--text-mid); margin-bottom: 15px;">Resources for sophomore students including NumPy, SciPy, and Matplotlib tutorials for chemical engineering data analysis.</p>
                    <a href="#" style="color: var(--buet-gold); font-weight: 600; text-decoration: none; font-size: 13px; text-transform: uppercase;">Download Scripts →</a>
                </div>
                <div class="card" style="padding: 25px; border: 1px solid var(--border); background: var(--bg-white);">
                    <h3 style="font-size: 18px; margin-bottom: 10px;">MATLAB Support</h3>
                    <p style="font-size: 14px; color: var(--text-mid); margin-bottom: 15px;">Numerical methods and reactor optimization scripts. Helpful for solving complex ODEs in Reaction Engineering.</p>
                    <a href="#" style="color: var(--buet-gold); font-weight: 600; text-decoration: none; font-size: 13px; text-transform: uppercase;">Access Toolbox →</a>
                </div>
            </div>
        </div>

        <div class="resource-section">
            <h2 style="font-family: 'EB Garamond'; color: var(--buet-navy); border-bottom: 2px solid var(--buet-gold); display: inline-block; padding-bottom: 5px; margin-bottom: 30px;">Examination Archive</h2>
            <div style="background: var(--bg-white); border: 1px solid var(--border); padding: 20px;">
                <table style="width: 100%; border-collapse: collapse; font-size: 14px; text-align: left;">
                    <thead>
                        <tr style="border-bottom: 1px solid var(--border); color: var(--text-light);">
                            <th style="padding: 10px;">Course Code</th>
                            <th style="padding: 10px;">Title</th>
                            <th style="padding: 10px;">Term</th>
                            <th style="padding: 10px;">Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid #f0f0f0;">
                            <td style="padding: 15px;">ChE 301</td>
                            <td style="padding: 15px;">Reaction Engineering I</td>
                            <td style="padding: 15px;">Jan 2024</td>
                            <td style="padding: 15px;"><a href="#" style="color: var(--buet-navy);">PDF</a></td>
                        </tr>
                        <tr>
                            <td style="padding: 15px;">ChE 203</td>
                            <td style="padding: 15px;">Chemical Engineering Thermodynamics</td>
                            <td style="padding: 15px;">July 2023</td>
                            <td style="padding: 15px;"><a href="#" style="color: var(--buet-navy);">PDF</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</section>

<?php include('includes/footer.php'); ?>