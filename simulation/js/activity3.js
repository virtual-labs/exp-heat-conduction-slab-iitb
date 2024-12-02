function activity3() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <p>Learning Objective: Calculate maximum temperature </p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act3();' id='temp-btn-4' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function start_act3() {
    let temp_btn = document.getElementById('temp-btn-4');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Calculate Heat Transfer", "tb3-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb3-box'>
        <p style="font-size: 24px; font-weight: 600; text-align: center">Activity 3</p> <br>
        <h5> A plane wall is composite of two materials A &amp; B. The material A has heat generation q = 1.5 *10<sup>6</sup>w/m<sup>3</sup>. A has thermal conductivity k<sub>A</sub> 75w/m-k and thickness of ${act3_b1}mm. B has thermal conductivity k<sub>B</sub> 150w/m-k and thickness of ${act3_b2}mm. Left end of A is insulated. The right end is exposed to water at ${act3_t}<sup>o</sup>C with h = 1000w/m<sup>2</sup>k. Find the temperature at the interface of A &amp; B and at the right surface of B. Also find the maximum temperature. Assume cross sectional area to 1m<sup>2</sup>. </h5>
        <br>
        <div class="row">
            <div class="col-6"> <p style='text-align: center;'><img style='width: 70%;' src='./images/activity3_1.png'></p> </div>
            <div class="col-6"> <p style='text-align: left;'><img style='width: 50%;' src='./images/activity3_2.png'></p> </div>
        </div>
        <br>

        <h5>Temperature at interface is given by</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ Q = \\frac{T_2 - T_4}{\\frac{b_2}{k_BA}+\\frac{1}{hA}} $$
                $$ T_2 = Q [\\frac{b_2}{k_BA} + \\frac{1}{hA}] + T_4 $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal10-inp'> <span id='cal10-val-sp'></span> <sup>o</sup>C

            <button class='btn btn-info std-btn' onclick='verify_act3_t2();' id='btn_act3_t2' style="width:20%">Verify</button>
        </p>

        <div id="act3_c1" style="display: none">
            <h5>Now,</h5>
            <p style='text-align: center;'> <span style='display: inline-block;' >
                <span style='display: inline-block;' >
                    $$ Q = \\frac{d^2 T}{dx^2} + \\frac{\\bar{q}}{k} = 0 $$
                </span>
            </p>

            <h5>Integrating wrt x</h5>
            <p style='text-align: center;'> <span style='display: inline-block;' >
                <span style='display: inline-block;' >
                    $$ \\frac{dT}{dx} = - \\frac{\\bar{q}}{k}x + c_1 \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ ...eq\\ 1 $$
                </span>
            </p>

            <h5>Again integrating wrt x</h5>
            <p style='text-align: center;'> <span style='display: inline-block;' >
                <span style='display: inline-block;' >
                    $$ T = - \\frac{\\bar{q}}{k} \\frac{x^2}{2} + c_1 x + c_2 \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ ...eq\\ 2 $$
                </span>
            </p>

            <p style='text-align: center;'> <span style='display: inline-block;' >
                <span style='display: inline-block;' >
                    $$ At\\ x=0,\\ \\ \\  \\frac{dT}{dx}=0\\ \\ \\ from\\ eq\\ 1 $$
                    $$ c_1 = $$
                </span>
                <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal11-inp'> <span id='cal11-val-sp'></span> <sup>o</sup>C

                <button class='btn btn-info std-btn' onclick='verify_act3_c1();' id='btn_act3_c1' style="width:20%">Verify</button>
            </p>
        </div>

        <div id="act3_tmax" style="display: none">
            <p style='text-align: center;'> <span style='display: inline-block;' >
                <span style='display: inline-block;' >
                    $$ At\\ x=b_1,\\ \\ \\ T = T_2^oC\\ \\ \\ from\\ eq\\ 2 $$
                    $$ T_2 = - \\frac{\\bar{q}}{k} \\frac{b_1^2}{2} + c_1 b + c_2 $$
                    $$ c_2 = T_2 + \\frac{\\bar{q}}{k} \\frac{b_1^2}{2} $$
                </span>
            </p>

            <p style='text-align: center;'> <span style='display: inline-block;' >
                <span style='display: inline-block;' >
                    $$ Max\\ temp\\ at\\ x=0\\ \\ \\ from\\ eq\\ 2 $$
                    $$ T_{max} = c_2 $$
                </span>
                <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal12-inp'> <span id='cal12-val-sp'></span>

                <button class='btn btn-info std-btn' onclick='verify_act3_tmax();' id='btn_act3_tmax' style="width:20%">Verify</button>
            </p>
        </div>

        <div id="act3_t3" style="display: none">
            <h5>Temperature at right surface of B</h5>
            <p style='text-align: center;'> <span style='display: inline-block;'>
                <span style='display: inline-block;' >
                    $$ Q = - \\frac{T_3 -T_4}{\\frac{1}{hA}} $$
                    $$ T_3 = \\frac{Q}{hA} + T_4 $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal13-inp'> <span id='cal13-val-sp'></span> <sup>o</sup>C

                <button class='btn btn-info std-btn' onclick='verify_act3_t3();' id='btn_act3_t3' style="width:20%">Verify</button>
            </p>
        </div>

    </div>

    `;
    maindiv.innerHTML += text;
    internal_calculations2();
    setTimeout(() => { show_step('tb3-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function internal_calculations2() {
    act3_Q = act3_qbar_val * act3_cross_sec_area * act3_b1_val;
    act3_t2 = act3_Q * ((act3_b2_val / act3_kb * act3_cross_sec_area) + (1 / act3_h * act3_cross_sec_area)) + act3_t;
    act3_c2 = act3_t2 + (act3_qbar_val / act3_ka) * (Math.pow(act3_b1_val, 2) / 2);
    act3_tmax = act3_c2;
    act3_t3 = (act3_Q / act3_h * act3_cross_sec_area) + act3_t;
    console.log("act3 Q= ", act3_Q);
    console.log("act3 T2= ", act3_t2);
    console.log("act3 C1= ", act3_c1);
    console.log("act3 Tmax= ", act3_tmax);
    console.log("act3 T3= ", act3_t3);
}
function verify_act3_t2() {
    let btn = document.getElementById('btn_act3_t2');
    let div = document.getElementById('act3_c1');
    let inp10 = document.getElementById('cal10-inp');
    let sp10 = document.getElementById('cal10-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp10.value).toFixed(3)), parseFloat(act3_t2.toFixed(3)))) {
        alert('T2 value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp10.remove();
    sp10.innerText = `${(act3_t2).toFixed(3)}`;
    div.style.display = 'block';
}
function verify_act3_c1() {
    let btn = document.getElementById('btn_act3_c1');
    let div = document.getElementById('act3_tmax');
    let inp11 = document.getElementById('cal11-inp');
    let sp11 = document.getElementById('cal11-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp11.value).toFixed(3)), parseFloat(act3_c1.toFixed(3)))) {
        alert('C1 value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp11.remove();
    sp11.innerText = `${(act3_c1).toFixed(0)}`;
    div.style.display = 'block';
}
function verify_act3_tmax() {
    let btn = document.getElementById('btn_act3_tmax');
    let div = document.getElementById('act3_t3');
    let inp12 = document.getElementById('cal12-inp');
    let sp12 = document.getElementById('cal12-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp12.value).toFixed(3)), parseFloat(act3_tmax.toFixed(3)))) {
        alert('Tmax value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp12.remove();
    sp12.innerText = `${(act3_tmax).toFixed(2)}`;
    div.style.display = 'block';
}
function verify_act3_t3() {
    let btn = document.getElementById('btn_act3_t3');
    let inp13 = document.getElementById('cal13-inp');
    let sp13 = document.getElementById('cal13-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp13.value).toFixed(3)), parseFloat(act3_t3.toFixed(3)))) {
        alert('T3 value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp13.remove();
    sp13.innerText = `${(act3_t3).toFixed(0)}`;
    exp_complete();
}
function exp_complete() {
    alert('Experiment completed');
}
//# sourceMappingURL=activity3.js.map