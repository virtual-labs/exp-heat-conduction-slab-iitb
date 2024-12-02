let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <h5>Conduction through composite slab</h5>
        <p>Learning Objective: Calculate the inside and outside temperature</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Caculate Temperature", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>
        <p style="font-size: 24px; font-weight: 600; text-align: center">Activity 1</p> <br>
        <h5> A flat plate of steel (k = 54 w/m-k) ${act1_b}cm thick, ${act1_w}cm wide and 1m high generates heat at the rate of ${act1_qbar}kw/m<sup>3</sup>. The temperature of the left end surface is ${act1_t1}<sup>o</sup>C and on right end is ${act1_t2}<sup>o</sup>C. Find the position and value of maximum temperature in the slab. Also find the heat flow from each surface.</h5>
        <br>
        <div style='text-align: center;'><img style='width: 20%;' src='./images/activity1.png'></div>
        <br><br>

        <h5>Poisson's equation is given by</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ \\frac{d^2T}{dx^2} + \\frac{\\bar{q}}{k} = 0 $$
            </span>
        </p>

        <h5>Integrating wrt x, we get</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ \\frac{dT}{dx} = - \\frac{\\bar{q}}{k} x + c1 \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ ...eq\\ 1 $$
            </span>
        </p>

        <h5>Again integrating wrt x, we get</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ T = - \\frac{\\bar{q}}{k} \\frac{x^2}{2} + c_1 x +c_2 \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ ...eq\\ 2 $$
            </span>
        </p>

        <h5>Applying boundry condition in eq 2</h5>
        <p style='text-align: center;'> <span style='display: inline-block;'>
            <span style='display: inline-block;' >
                $$ At\\ x=0,\\ T=T_1 $$
                $$ c_2 = T_1 $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal01-inp'> <span id='cal01-val-sp'></span>

            <button class='btn btn-info std-btn' onclick='verify_act1_c2();' id='btn_act1_c2' style="width:20%">Verify</button>
        </p>

        <div id="act1_c1" style="display: none">
            <h5>Applying boundry condition in eq 2</h5>
            <p style='text-align: center;'> <span style='display: inline-block;'>
                <span style='display: inline-block;' >
                    $$ At\\ x=b,\\ T=T_2 $$
                    $$ T_2 = - \\frac{\\bar{q}}{k} \\frac{b*2}{2} + c_1 b + c_2 $$
                    $$ c_1 = \\frac{[T_2 + \\frac{\\bar{q}}{k} \\frac{b^2}{2} - c_2]}{b} $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal02-inp'> <span id='cal02-val-sp'></span>

                <button class='btn btn-info std-btn' onclick='verify_act1_c1();' id='btn_act1_c1' style="width:20%">Verify</button>
            </p>
        </div>
        
        <div id="act1_x" style="display: none">
            <h5>Position of maximum temperature</h5>
            <p style='text-align: center;'> <span style='display: inline-block;'>
                <span style='display: inline-block;' >
                    $$ \\frac{dT}{dx} = 0 $$
                </span>
            </p>

            <h5>From eq 1, we get</h5>
            <p style='text-align: center;'> <span style='display: inline-block;'>
                <span style='display: inline-block;' >
                    $$ - \\frac{\\bar{q}}{k}  x + c_1 = 0 $$
                    $$ x = \\frac{c_1 k}{\\bar{q}} $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal03-inp'> <span id='cal03-val-sp'></span> m

                <button class='btn btn-info std-btn' onclick='verify_act1_x();' id='btn_act1_x' style="width:20%">Verify</button>
            </p>
        </div>

        <div id="act1_tmax" style="display: none">
            <h5>Now, using the above value of x in eq 2</h5>
            <p style='text-align: center;'> <span style='display: inline-block;'>
                <span style='display: inline-block;' >
                    $$ T_{max} = - \\frac{\\bar{q}}{k} \\frac{x^2}{2} + c_1 x + c_2 $$
                </span>

                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal04-inp'> <span id='cal04-val-sp'></span> k/w

                <button class='btn btn-info std-btn' onclick='verify_act1_tmax();' id='btn_act1_tmax' style="width:20%">Verify</button>
            </p>
        </div>

        <div id="act1_ql" style="display: none">
            <h5>Heat flow from left end</h5>
            <p style='text-align: center;'> <span style='display: inline-block;'>
                <span style='display: inline-block;' >
                    $$ Q_L = - k A (\\frac{dT}{dx})_{x=0} $$
                    $$ Q_L = - k A c_1 $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal05-inp'> <span id='cal05-val-sp'></span> w

                <button class='btn btn-info std-btn' onclick='verify_act1_ql();' id='btn_act1_ql' style="width:20%">Verify</button>
            </p>
        </div>

        <div id="act1_qr" style="display: none">
            <h5>Heat flow from right end</h5>
            <p style='text-align: center;'> <span style='display: inline-block;'>
                <span style='display: inline-block;' >
                    $$ Q_R = - k A (\\frac{dT}{dx})_{x=b} $$
                    $$ Q_R = - k A [- \\frac{\\bar{q}}{k}b + c_1] $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal06-inp'> <span id='cal06-val-sp'></span> w

                <button class='btn btn-info std-btn' onclick='verify_act1_qr();' id='btn_act1_qr' style="width:20%">Verify</button>
            </p>
        </div>
    </div>
    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    internal_calculations();
}
function internal_calculations() {
    act1_c1 = (act1_t2 + ((act1_qbar_val / act1_k) * (Math.pow(act1_b_val, 2) / 2)) - act1_c2) / act1_b_val;
    act1_x = (act1_c1 * act1_k) / act1_qbar_val;
    act1_tmax = (-(act1_qbar_val / act1_k) * (Math.pow(act1_x, 2) / 2)) + act1_c1 * act1_x + act1_c2;
    act1_a = act1_w / 100 * act1_l;
    act1_QL = -(act1_k * act1_a * act1_c1);
    act1_QR = -(act1_k * act1_a) * (-(act1_qbar_val / act1_k * act1_b) + act1_c1);
    act1_Q = act1_qbar_val * act1_l * act1_b_val * act1_w;
    act1_Qsum = act1_QL + act1_QR;
    console.log("act1 C1= ", act1_c1);
    console.log("act1 x= ", act1_x);
    console.log("act1 tmax= ", act1_tmax);
    console.log("act1 a= ", act1_a);
    console.log("act1 QL= ", act1_QL);
    console.log("act1 QR= ", act1_QR);
    console.log("act1 Q= ", act1_Q);
    console.log("act1 Q sum= ", act1_Qsum);
    // act1_R1 = 1/(act1_inside_conv_heat_transfer_coeff*act1_area);
    // act1_R1 = parseFloat(act1_R1.toFixed(7));
    // console.log("R1= ",act1_R1);
    // act1_R2 = act1_wood_thickness/(act1_wood_k*act1_area);
    // act1_R2 = parseFloat(act1_R2.toFixed(7));
    // console.log("R2= ",act1_R2);
    // act1_R3 = act1_plastic_thickness/(act1_plastic_k*act1_area);
    // act1_R3 = parseFloat(act1_R3.toFixed(7));
    // console.log("R3= ",act1_R3);
    // act1_R4 = act1_brick_thickness/(act1_brick_k*act1_area);
    // act1_R4 = parseFloat(act1_R4.toFixed(7));
    // console.log("R4= ",act1_R4);
    // act1_R5 = 1/(act1_outside_conv_heat_transfer_coeff*act1_area);
    // act1_R5 = parseFloat(act1_R5.toFixed(7));
    // console.log("R5= ",act1_R5);
    // act1_R = act1_R1+act1_R2+act1_R3+act1_R4+act1_R5;
    // act1_R = parseFloat(act1_R.toFixed(7));
    // console.log("R= ",act1_R);
    // act1_Q = (act1_inside_temp-act1_outside_temp)/act1_R;
    // act1_Q = parseFloat(act1_Q.toFixed(7));
    // console.log("Q= ",act1_Q);
    // inside_sur_temp = act1_Q*act1_R1+act1_inside_temp;
    // inside_sur_temp = parseFloat(inside_sur_temp.toFixed(7));
    // console.log("T2= ",inside_sur_temp);
    // outside_sur_temp = act1_Q*act1_R5+act1_outside_temp;
    // outside_sur_temp = parseFloat(outside_sur_temp.toFixed(7));
    // console.log("T5= ",outside_sur_temp);
}
function verify_act1_c2() {
    let btn = document.getElementById('btn_act1_c2');
    let div = document.getElementById('act1_c1');
    let inp1 = document.getElementById('cal01-inp');
    let sp1 = document.getElementById('cal01-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp1.value).toFixed(2)), parseFloat(act1_c2.toFixed(2)))) {
        alert('C2 value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(act1_c2).toFixed(0)}`;
    div.style.display = 'block';
}
function verify_act1_c1() {
    let btn = document.getElementById('btn_act1_c1');
    let div = document.getElementById('act1_x');
    let inp2 = document.getElementById('cal02-inp');
    let sp2 = document.getElementById('cal02-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp2.value).toFixed(2)), parseFloat(act1_c1.toFixed(2)))) {
        alert('C1 value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp2.remove();
    sp2.innerText = `${(act1_c1).toFixed(2)}`;
    div.style.display = 'block';
}
function verify_act1_x() {
    let btn = document.getElementById('btn_act1_x');
    let div = document.getElementById('act1_tmax');
    let inp3 = document.getElementById('cal03-inp');
    let sp3 = document.getElementById('cal03-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp3.value).toFixed(3)), parseFloat(act1_x.toFixed(3)))) {
        alert('x value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp3.remove();
    sp3.innerText = `${(act1_x).toFixed(3)}`;
    div.style.display = 'block';
}
function verify_act1_tmax() {
    let btn = document.getElementById('btn_act1_tmax');
    let div = document.getElementById('act1_ql');
    let inp4 = document.getElementById('cal04-inp');
    let sp4 = document.getElementById('cal04-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp4.value).toFixed(3)), parseFloat(act1_tmax.toFixed(3)))) {
        alert('Tmax value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp4.remove();
    sp4.innerText = `${(act1_tmax).toFixed(3)}`;
    div.style.display = 'block';
}
function verify_act1_ql() {
    let btn = document.getElementById('btn_act1_ql');
    let div = document.getElementById('act1_qr');
    let inp5 = document.getElementById('cal05-inp');
    let sp5 = document.getElementById('cal05-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp5.value).toFixed(3)), parseFloat(act1_QL.toFixed(3)))) {
        alert('QL value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp5.remove();
    sp5.innerText = `${(act1_QL).toFixed(3)}`;
    div.style.display = 'block';
}
function verify_act1_qr() {
    let btn = document.getElementById('btn_act1_qr');
    let inp6 = document.getElementById('cal06-inp');
    let sp6 = document.getElementById('cal06-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp6.value).toFixed(3)), parseFloat(act1_QR.toFixed(3)))) {
        alert('QR value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp6.remove();
    sp6.innerText = `${(act1_QR).toFixed(3)}`;
    activity2();
}
activity1();
//# sourceMappingURL=activity1.js.map