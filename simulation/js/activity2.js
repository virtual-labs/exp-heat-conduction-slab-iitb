function activity2() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <p>Learning Objective: Calculate maximum temperature </p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act2();' id='temp-btn-3' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function start_act2() {
    let temp_btn = document.getElementById('temp-btn-3');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Calculate Maximum Temperature", "tb2-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-box'>
        <p style="font-size: 24px; font-weight: 600; text-align: center">Activity 2</p> <br>
        <h5> A plate having thickness ${act2_b}mm has an internal heat generation of 200*10<sup>6</sup>w/m<sup>3</sup> and a thermal conductivity 25w/m-k. One side of the plate is insulated and the other side is maintained at ${act2_t}<sup>o</sup>C. Find the maximum temperature. </h5>
        <br>
        <div style='text-align: center;'><img style='width: 20%;' src='./images/activity2.png'></div>
        <br><br>

        <h5>Poisson's equation is given as</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ \\frac{d^2T}{dx^2} + \\frac{\\bar{q}}{k} = 0 $$
            </span>
        </p>

        <h5>Integrating wrt x</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ \\frac{dT}{dx} = - \\frac{\\bar{q}}{k} x + c1 \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ ...eq\\ 1 $$
            </span>
        </p>

        <h5>Again integrating wrt x, we get</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ T = - \\frac{\\bar{q}}{k} \\frac{x^2}{2} + c_1 x + c_2 \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ ...eq\\ 2 $$
            </span>
        </p>

        <p style='text-align: center;'> <span style='display: inline-block;'>
            <span style='display: inline-block;' >
                $$ At\\ x=0,\\ \\frac{dT}{dx}=0 $$
                $$ c_1 $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal07-inp'> <span id='cal07-val-sp'></span>

            <button class='btn btn-info std-btn' onclick='verify_act2_c1();' id='btn_act2_c1' style="width:20%">Verify</button>
        </p>

        <div id="act2_c2" style="display: none">
            <p style='text-align: center;'> <span style='display: inline-block;' >
                <span style='display: inline-block;'>
                    $$ At\\ x=0,\\ T=${act2_t}^oC $$
                    $$ T = - \\frac{\\bar{q}}{k} \\frac{b*2}{2} + c_1 b + c_2 $$
                    $$ c_2 = T + \\frac{\\bar{q}}{k} \\frac{b^2}{2} $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal08-inp'> <span id='cal08-val-sp'></span>
                
                <button class='btn btn-info std-btn' onclick='verify_act2_c2();' id='btn_act2_c2' style="width:20%">Verify</button>
            </p>
        </div>

        <div id="act2_tmax" style="display: none">
            <h5>Position and maximum temperature at </h5>
            <p style='text-align: center;'> <span style='display: inline-block;' >
                <span style='display: inline-block;' >
                    $$ x = 0,  \\frac{dT}{dx} = 0 $$
                </span>
            </p>

            <h5> Maximum temperature is at position x=0 </h5>
            <h5> From eq 2, we get </h5>
             <p style='text-align: center;'> <span style='display: inline-block;' >
                <span style='display: inline-block;' >
                    $$ T_{max} = c_2 $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal09-inp'> <span id='cal09-val-sp'></span> <sup>o</sup>C 
                
                <button class='btn btn-info std-btn' onclick='verify_act2_tmax();' id='btn_act2_tmax' style="width:20%">Verify</button>
            </p>
        </div>
    </div>

    `;
    maindiv.innerHTML += text;
    internal_calculations1();
    setTimeout(() => { show_step('tb2-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function internal_calculations1() {
    act2_c2 = act2_t + (act2_qbar_val / act2_k) * (Math.pow(act2_b_val, 2) / 2);
    console.log("C2= ", act2_c2);
    act2_tmax = act2_c2;
    console.log("act2 Tmax= ", act2_tmax);
}
function verify_act2_c1() {
    let btn = document.getElementById('btn_act2_c1');
    let div = document.getElementById('act2_c2');
    let inp7 = document.getElementById('cal07-inp');
    let sp7 = document.getElementById('cal07-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp7.value).toFixed(2)), parseFloat(act2_c1.toFixed(2)))) {
        alert('C1 value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp7.remove();
    sp7.innerText = `${(act2_c1).toFixed(0)}`;
    div.style.display = 'block';
}
function verify_act2_c2() {
    let btn = document.getElementById('btn_act2_c2');
    let div = document.getElementById('act2_tmax');
    let inp8 = document.getElementById('cal08-inp');
    let sp8 = document.getElementById('cal08-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp8.value).toFixed(2)), parseFloat(act2_c2.toFixed(2)))) {
        alert('C2 value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp8.remove();
    sp8.innerText = `${(act2_c2).toFixed(2)}`;
    div.style.display = 'block';
}
function verify_act2_tmax() {
    let btn = document.getElementById('btn_act2_tmax');
    let inp9 = document.getElementById('cal09-inp');
    let sp9 = document.getElementById('cal09-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp9.value).toFixed(2)), parseFloat(act2_tmax.toFixed(2)))) {
        alert('Tmax value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp9.remove();
    sp9.innerText = `${(act2_tmax).toFixed(2)}`;
    activity3();
}
//# sourceMappingURL=activity2.js.map