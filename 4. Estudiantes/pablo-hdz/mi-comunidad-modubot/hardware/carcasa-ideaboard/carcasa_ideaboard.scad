// =====================================================================
//  Carcasa para IdeaBoard (CRCibernética)  ·  v0.2 BORRADOR (versión simple, sin textos)
//  OpenSCAD 2021.01+  ·  Unidades: mm
//
//  ESTADO DE LAS MEDIDAS (ver informe_tecnico.md):
//    [EST]  estimada a escala desde las ilustraciones oficiales de la wiki
//           (escala calibrada con el paso de 2,54 mm de los headers). ±0,5–1 mm.
//    [PEND] no aparece en ninguna fuente; valor típico, hay que medirlo.
//    [DIS]  decisión de diseño (libre).
//  NO imprimir la versión final sin confirmar con calibrador las [EST]/[PEND].
//
//  Sistema de coordenadas: origen en la esquina inferior izquierda de la PCB
//  vista desde arriba, con el borde del USB-C y la bornera ARRIBA (Y máx.).
//  Z = 0 es la cara inferior de la PCB.
//
//  Uso:  openscad -D 'parte="base"' -o base.stl carcasa_ideaboard.scad
// =====================================================================

parte = "ensamble"; // [base, tapa, tapa_imprimir, adaptador, viga, llave, conector_L, conector_vertical, ensamble, explotado, abierta, sistema, pcb, interferencia]

/* [PCB] */
pcb_w   = 47.0;   // [EST] ancho (X)
pcb_l   = 72.1;   // [EST] largo (Y)
pcb_t   = 1.6;    // [PEND] espesor típico
pcb_r   = 3.7;    // [EST] radio de esquinas
hole_d  = 3.2;    // [PEND] diámetro de los agujeros de montaje (parece M3)
pad_d   = 5.6;    // [EST] diámetro del anillo/pad alrededor del agujero
holes   = [[4.0, 3.5], [43.2, 3.5], [4.0, 68.0], [43.2, 68.0]]; // [EST] centros
bottom_clear = 3.0; // [PEND] altura de soldaduras/pines bajo la PCB

/* [Componentes (centro X, centro Y)] */
usb_c       = [28.35, 68.6]; // [EST] receptáculo USB-C en el borde superior
usb_w       = 8.9;           // [EST] ancho del receptáculo
usb_h       = 3.2;           // [PEND] alto del receptáculo
usb_plug_w  = 13.0;          // [DIS] hueco para la sobremoldura del cable
usb_plug_h  = 7.5;           // [DIS]
term_c      = [12.9, 67.6];  // [EST] bornera de alimentación (2 polos)
term_size   = [7.4, 7.7];    // [EST] huella
term_h      = 9.0;           // [PEND] altura de la bornera
btn_boot    = [44.0, 60.3];  // [EST] pulsador BOOT
btn_reset   = [44.0, 53.1];  // [EST] pulsador RESET
btn_h       = 3.5;           // [PEND] altura del pulsador con el émbolo
led_rgb     = [23.5, 34.4];  // [EST] WS2812B
led_pwr     = [38.0, 68.0];  // [EST] LED rojo de encendido
qwiic_c     = [2.9, 37.4];   // [EST] conector STEMMA QT/Qwiic (borde izquierdo)
qwiic_size  = [4.3, 6.1];    // [EST]
qwiic_h     = 2.9;           // [PEND]
jumper_c    = [23.7, 42.4];  // [EST] header 3 pines Vin/SELECT/+3.3V (vertical)
motor2_c    = [4.7, 44.85];  // [EST] header 2 pines MOTOR2 (vertical)
motor1_c    = [43.0, 44.85]; // [EST] header 2 pines MOTOR1 (vertical)
hdr_pitch   = 2.54;          // [VERIF] paso estándar 0,1"
hdr_body_h  = 2.5;           // [PEND] plástico del header
hdr_pin_h   = 8.5;           // [PEND] altura total sobre la PCB (macho estándar)
hdrL_cols   = [2.8, 5.3, 7.8];     // [EST] bloque izquierdo GND / V+ / señal
hdrR_cols   = [39.4, 41.9, 44.4];  // [EST] bloque derecho señal / 3.3V / GND
hdr_rows_y  = [11.2, 26.4];        // [EST] primera y última fila (7 filas)
row4L       = [2.8, 10.3, 30.0];   // [EST] fila de 4 pines izq. (x0, x1, y)
row4R       = [36.9, 44.4, 30.0];  // [EST] fila de 4 pines der. (x0, x1, y)
esp_c       = [23.8, 17.3];  // [EST] blindaje del ESP32-WROOM-32E
esp_size    = [16.3, 17.6];  // [EST]
esp_h       = 3.1;           // [VERIF-datasheet módulo] 3,1 mm
ant_box     = [15.4, 2.5, 34.5, 8.5]; // [EST] zona de antena (x0,y0,x1,y1): sin metal
drv1_c      = [14.1, 43.0];  // [EST] L9110S (motor 2)
drv2_c      = [34.4, 43.0];  // [EST] L9110S (motor 1)
smd_max_h   = 4.5;           // [PEND] altura máx. de lo que queda BAJO la tapa (cristal, regulador…)

/* [Carcasa] */
wall        = 2.0;   // [DIS] pared lateral
floor_t     = 2.0;   // [DIS] piso de la base
plate_t     = 2.0;   // [DIS] espesor de la tapa
clr_pcb     = 0.5;   // [DIS] holgura PCB-pared por lado
standoff_h  = 5.0;   // [DIS] PCB elevada sobre el piso (>= bottom_clear + 1)
gap_top     = 5.0;   // [DIS] cara sup. PCB -> cara inf. tapa (>= smd_max_h + 0,5)
seam_relief = 0.2;   // [DIS] la tapa aprieta la PCB con los bujes, no con las paredes
lip_h       = 2.0;   // [DIS] reborde de centrado de la tapa
lip_t       = 1.2;
clr_fit     = 0.25;  // [DIS] holgura reborde-pared por lado
r_ext       = 4.5;   // [DIS] radio exterior de esquinas
boss_d      = 5.4;   // [DIS] < pad_d: el buje sólo toca el pad, nunca pistas
screw_clr_d = 3.4;   // [DIS] paso para M3
pilot_d     = 2.6;   // [DIS] M3 autorroscante en PLA/PETG (4.0 para inserto térmico)
use_inserts = false; // [DIS] true = agujero para inserto térmico M3 x 4
insert_d    = 4.0;
win_m       = 0.8;   // [DIS] margen de las ventanas alrededor de cada componente
btn_hole_d  = 5.5;   // [DIS] agujero para pulsar BOOT/RESET con el dedo o un lápiz
led_hole_d  = 4.5;
vent_w      = 1.6;   // [DIS] ancho de ranuras de ventilación
explode     = 25;

/* [Sistema de vigas con cola de milano] */
con_adaptador = true;  // [DIS] base con agujeros pasantes + adaptador debajo (M3 x screw_len + tuerca)
screw_len   = 20;      // [DIS] largo del tornillo M3 tapa→adaptador
nut_af      = 5.5;     // tuerca M3: entre caras
nut_h       = 2.4;
nut_clr     = 0.3;
beam_pitch  = 8.0;     // [DIS] paso entre agujeros, igual que LEGO Technic
beam_hole_d = 4.9;     // [DIS] para pines/ejes Technic Ø4,8 (+0,1 por impresión)
beam_w      = 10.0;    // [DIS] ancho de la viga (deja pared entre agujero y ranuras)
beam_h      = 7.2;     // [DIS] alto de la viga y del adaptador (grosor Technic)
beam_n      = 5;       // [DIS] número de agujeros de la viga
dt_neck     = 2.6;     // [DIS] cola de milano: ancho en la boca
dt_depth    = 1.3;     // [DIS] profundidad (flancos a 45°: se imprime sin soportes)
dt_clr      = 0.15;    // [DIS] holgura macho-hembra por lado (subir a 0.2 si entra duro)
key_len     = 10;      // [DIS] largo de la llave doble

$fn = 48;
eps = 0.01;

// ------------------------- derivados ---------------------------------
in_x0 = -clr_pcb;            in_y0 = -clr_pcb;
in_w  = pcb_w + 2*clr_pcb;   in_l  = pcb_l + 2*clr_pcb;
out_x0 = in_x0 - wall;       out_y0 = in_y0 - wall;
out_w  = in_w + 2*wall;      out_l  = in_l + 2*wall;
z_floor_bot = -(standoff_h + floor_t);
z_pcb_top   = pcb_t;
z_lid_bot   = pcb_t + gap_top;           // cara inferior de la tapa
z_wall_top  = z_lid_bot - seam_relief;   // tope de las paredes de la base
z_lid_top   = z_lid_bot + plate_t;
usb_zc      = pcb_t + usb_h/2;
hdrL_box    = [hdrL_cols[0]-hdr_pitch/2, hdr_rows_y[0]-hdr_pitch/2,
               hdrL_cols[2]+hdr_pitch/2, hdr_rows_y[1]+hdr_pitch/2];
hdrR_box    = [hdrR_cols[0]-hdr_pitch/2, hdr_rows_y[0]-hdr_pitch/2,
               hdrR_cols[2]+hdr_pitch/2, hdr_rows_y[1]+hdr_pitch/2];
row4L_box   = [row4L[0]-hdr_pitch/2, row4L[2]-hdr_pitch/2, row4L[1]+hdr_pitch/2, row4L[2]+hdr_pitch/2];
row4R_box   = [row4R[0]-hdr_pitch/2, row4R[2]-hdr_pitch/2, row4R[1]+hdr_pitch/2, row4R[2]+hdr_pitch/2];
jumper_box  = [jumper_c[0]-hdr_pitch/2, jumper_c[1]-1.5*hdr_pitch, jumper_c[0]+hdr_pitch/2, jumper_c[1]+1.5*hdr_pitch];
motor2_box  = [motor2_c[0]-hdr_pitch/2, motor2_c[1]-hdr_pitch, motor2_c[0]+hdr_pitch/2, motor2_c[1]+hdr_pitch];
motor1_box  = [motor1_c[0]-hdr_pitch/2, motor1_c[1]-hdr_pitch, motor1_c[0]+hdr_pitch/2, motor1_c[1]+hdr_pitch];
term_box    = [term_c[0]-term_size[0]/2, term_c[1]-term_size[1]/2, term_c[0]+term_size[0]/2, term_c[1]+term_size[1]/2];

// Ventanas de la tapa (componentes que deben quedar accesibles por arriba)
windows = [hdrL_box, hdrR_box, row4L_box, row4R_box, jumper_box, motor2_box, motor1_box, term_box];

// ------------------------- utilidades --------------------------------
module rrect(x0, y0, w, l, r) {
    translate([x0, y0]) offset(r = r) offset(delta = -r) square([w, l]);
}
module box2d(b, m = 0) { translate([b[0]-m, b[1]-m]) square([b[2]-b[0]+2*m, b[3]-b[1]+2*m]); }
module outer2d(shrink = 0) { rrect(out_x0+shrink, out_y0+shrink, out_w-2*shrink, out_l-2*shrink, max(r_ext-shrink, 0.5)); }
module inner2d(grow = 0)   { rrect(in_x0-grow, in_y0-grow, in_w+2*grow, in_l+2*grow, pcb_r+clr_pcb+grow); }

// prisma exterior con esquinas redondeadas
module shell(z0, z1) { translate([0, 0, z0]) linear_extrude(z1 - z0) outer2d(); }

// ranuras de ventilación dentro de una caja [x0,y0,x1,y1], orientadas en Y
module slots(b, w = vent_w, pitch = 3.2) {
    n = floor((b[2]-b[0]-w)/pitch) + 1;
    off = (b[2]-b[0] - ((n-1)*pitch + w))/2;
    for (i = [0:n-1]) translate([b[0]+off+i*pitch + w/2, 0]) hull() {
        translate([0, b[1]+w/2]) circle(d = w);
        translate([0, b[3]-w/2]) circle(d = w);
    }
}

// =========================== BASE ====================================
module base() {
    difference() {
        union() {
            difference() {
                shell(z_floor_bot, z_wall_top);
                translate([0, 0, z_floor_bot + floor_t]) linear_extrude(100) inner2d();
            }
            // postes: sólo bajo los pads de montaje
            for (h = holes) translate([h[0], h[1], z_floor_bot + floor_t - eps])
                cylinder(d = boss_d, h = standoff_h + eps);
        }
        // agujeros de tornillo: pasantes si va sobre el adaptador; si no, ciegos (base lisa por abajo)
        for (h = holes) translate([h[0], h[1], con_adaptador ? z_floor_bot - 1 : z_floor_bot + 0.8])
            cylinder(d = con_adaptador ? screw_clr_d : (use_inserts ? insert_d : pilot_d), h = 50);
        // USB-C: ranura abierta por arriba en la pared trasera
        translate([usb_c[0], out_y0 + out_l - wall - 1, usb_zc]) usb_slot(wall + 2);
        // Bornera: entrada de cables
        translate([term_c[0] - (term_size[0]+2)/2, in_y0 + in_l - 1, pcb_t + 0.3])
            cube([term_size[0] + 2, wall + 2, 30]);
        // Qwiic: ranura en la pared izquierda
        translate([out_x0 - 1, qwiic_c[1] - 4, pcb_t - 0.6]) cube([wall + 2, 8, 30]);
        // ventilación inferior bajo drivers y zona central
        translate([0, 0, z_floor_bot - 1]) linear_extrude(floor_t + 2) {
            slots([drv1_c[0]-5, drv1_c[1]-6, drv1_c[0]+5, drv1_c[1]+6]);
            slots([drv2_c[0]-5, drv2_c[1]-6, drv2_c[0]+5, drv2_c[1]+6]);
            slots([8, 50, 36, 59]);
        }
    }
}

module usb_slot(depth) {
    // hueco con forma de estadio para la sobremoldura del cable + abierto hacia arriba
    rotate([-90, 0, 0]) linear_extrude(depth) hull() {
        for (s = [-1, 1]) translate([s*(usb_plug_w - usb_plug_h)/2, 0]) circle(d = usb_plug_h);
        translate([-usb_plug_w/2, -40]) square([usb_plug_w, 1]);
    }
}

// =========================== TAPA ====================================
module tapa() {
    difference() {
        union() {
            shell(z_lid_bot, z_lid_top);
            // reborde de centrado que entra en la base
            translate([0, 0, z_lid_bot - lip_h]) linear_extrude(lip_h + eps) difference() {
                inner2d(-clr_fit);
                inner2d(-clr_fit - lip_t);
            }
            // bujes: bajan hasta apoyar en el pad (aprietan la PCB contra los postes)
            for (h = holes) translate([h[0], h[1], z_pcb_top]) cylinder(d = boss_d, h = gap_top + eps);
        }
        // paso de tornillos
        for (h = holes) translate([h[0], h[1], 0]) cylinder(d = screw_clr_d, h = 50);
        // ventanas de headers, jumper, motores y bornera (con margen)
        translate([0, 0, z_pcb_top + 0.5]) linear_extrude(50) for (b = windows) offset(r = 0.6) box2d(b, win_m - 0.6);
        // pulsadores BOOT / RESET
        for (p = [btn_boot, btn_reset]) translate([p[0], p[1], 0]) cylinder(d = btn_hole_d, h = 50);
        // LED RGB
        translate([led_rgb[0], led_rgb[1], 0]) cylinder(d = led_hole_d, h = 50);
        // LED de encendido
        translate([led_pwr[0], led_pwr[1], 0]) cylinder(d = 2.5, h = 50);
        // espacio en el reborde para USB, bornera y Qwiic
        translate([usb_c[0] - usb_plug_w/2 - 0.5, in_y0 + in_l - 4, z_lid_bot - lip_h - 1]) cube([usb_plug_w + 1, 6, lip_h + 1 + eps]);
        translate([term_box[0] - 1.5, in_y0 + in_l - 4, z_lid_bot - lip_h - 1]) cube([term_size[0] + 3, 6, lip_h + 1 + eps]);
        translate([in_x0 - 2, qwiic_c[1] - 4.5, z_lid_bot - lip_h - 1]) cube([5, 9, lip_h + 1 + eps]);
        // ventilación sobre drivers L9110S, regulador, CH340 y cristal
        translate([0, 0, z_lid_bot - 1]) linear_extrude(plate_t + 2) {
            slots([drv1_c[0]-4.5, drv1_c[1]-3.5, drv1_c[0]+4.5, drv1_c[1]+3.5]);
            slots([drv2_c[0]-4.5, drv2_c[1]-3.5, drv2_c[0]+4.5, drv2_c[1]+3.5]);
            slots([7.5, 50.5, 33.5, 58.5]);
        }
    }
}


// ================= SISTEMA DE VIGAS CON COLA DE MILANO =================
// Un único perfil de cola de milano para todo: ranuras hembra a lo largo de
// las caras laterales y macho/hembra en los extremos. Así cualquier extremo de
// viga entra en el costado de otra viga, en el extremo de otra o en el canto
// del adaptador, y se puede deslizar hasta la posición deseada.
// Agujeros verticales Ø4,9 a paso 8: aceptan pines y ejes LEGO Technic.

z_ad_top = z_floor_bot;
z_ad_bot = z_floor_bot - beam_h;

// perfil en 2D: x = profundidad (0 = cara), y = alto (centrado)
module dt2d(c = 0) {
    offset(delta = -c) polygon([[-1, -(dt_neck/2 - 1)], [dt_depth, -(dt_neck/2 + dt_depth)],
                                [dt_depth, dt_neck/2 + dt_depth], [-1, dt_neck/2 - 1]]);
}
// coloca el perfil: p = punto en la cara, n = profundidad (hembra: hacia dentro;
// macho: hacia fuera), f = dirección del ensanche, g = dirección de deslizamiento
module dt(p, n, g, len, male = false, f = [0, 0, 1]) {
    multmatrix([[n[0], f[0], g[0], p[0]], [n[1], f[1], g[1], p[1]], [n[2], f[2], g[2], p[2]], [0, 0, 0, 1]])
        linear_extrude(len, center = true)
            if (male) intersection() { dt2d(dt_clr); translate([-0.5, -10]) square([20, 20]); }
            else dt2d(0);
}

module adaptador() {
    cx = out_x0 + out_w/2;  cy = out_y0 + out_l/2;
    hm = dt_depth + 1.2 + beam_hole_d/2;              // margen agujero-canto
    nx = floor((out_w - 2*hm)/beam_pitch) + 1;
    ny = floor((out_l - 2*hm)/beam_pitch) + 1;
    zc = z_ad_bot + beam_h/2;
    nut_bot = z_lid_top - screw_len;
    nut_top = nut_bot + nut_h + nut_clr;
    assert(nut_bot > z_ad_bot && nut_top < z_ad_top - 1, "screw_len no cuadra con el adaptador");
    difference() {
        translate([0, 0, z_ad_bot]) linear_extrude(beam_h) outer2d();
        // ranuras de cola de milano en los cuatro cantos (abiertas en las esquinas)
        dt([cx, out_y0, zc], [0, 1, 0], [1, 0, 0], out_w + 2);
        dt([cx, out_y0 + out_l, zc], [0, -1, 0], [1, 0, 0], out_w + 2);
        dt([out_x0, cy, zc], [1, 0, 0], [0, 1, 0], out_l + 2);
        dt([out_x0 + out_w, cy, zc], [-1, 0, 0], [0, 1, 0], out_l + 2);
        // rejilla de agujeros Technic (salvo donde van los tornillos)
        for (i = [0:nx-1], j = [0:ny-1]) {
            x = cx + (i - (nx-1)/2)*beam_pitch;  y = cy + (j - (ny-1)/2)*beam_pitch;
            if (min([for (h = holes) norm([x - h[0], y - h[1]])]) > 6)
                translate([x, y, z_ad_bot - 1]) cylinder(d = beam_hole_d, h = beam_h + 2);
        }
        // tornillos y tuercas M3 cautivas
        for (h = holes) {
            translate([h[0], h[1], z_ad_bot - 1]) cylinder(d = screw_clr_d, h = beam_h + 2);
            translate([h[0], h[1], z_ad_bot - eps]) rotate(30)
                cylinder(d = (nut_af + nut_clr)/cos(30), h = nut_top - z_ad_bot, $fn = 6);
        }
    }
}

// viga a lo largo de X, centrada en Y, apoyada en z = 0
// extremo x = 0: cola hembra · extremo x = L: cola macho
function beam_len(n) = 5.5 + (n - 1)*beam_pitch + 4;
module viga(n = beam_n) {
    L = beam_len(n);
    difference() {
        translate([0, -beam_w/2, 0]) cube([L, beam_w, beam_h]);
        for (i = [0:n-1]) translate([5.5 + i*beam_pitch, 0, -1]) cylinder(d = beam_hole_d, h = beam_h + 2);
        dt([L/2,  beam_w/2, beam_h/2], [0, -1, 0], [1, 0, 0], L + 2);
        dt([L/2, -beam_w/2, beam_h/2], [0,  1, 0], [1, 0, 0], L + 2);
        dt([0, 0, beam_h/2], [1, 0, 0], [0, 1, 0], beam_w + 2);
    }
    dt([L, 0, beam_h/2], [1, 0, 0], [0, 1, 0], beam_w, male = true);
}

// llave doble: une dos ranuras enfrentadas (vigas en paralelo, o viga con adaptador)
module llave() {
    dt([0, 0, 0], [ 1, 0, 0], [0, 0, 1], key_len, male = true, f = [0, 1, 0]);
    dt([0, 0, 0], [-1, 0, 0], [0, 0, 1], key_len, male = true, f = [0, 1, 0]);
}

// conector en L (90° en el plano): dos colas macho en caras contiguas + agujero Technic
module conector_L() {
    difference() {
        translate([-beam_w/2, -beam_w/2, 0]) cube([beam_w, beam_w, beam_h]);
        translate([0, 0, -1]) cylinder(d = beam_hole_d, h = beam_h + 2);
    }
    dt([beam_w/2, 0, beam_h/2], [1, 0, 0], [0, 1, 0], beam_w, male = true);
    dt([0, beam_w/2, beam_h/2], [0, 1, 0], [1, 0, 0], beam_w, male = true);
}

// conector vertical: cola macho lateral (entra en una ranura horizontal) y
// cola macho arriba (recibe el extremo hembra de una viga puesta de pie)
module conector_vertical() {
    difference() {
        translate([-beam_w/2, -beam_w/2, 0]) cube([beam_w, beam_w, beam_w]);
        translate([0, 0, -1]) cylinder(d = beam_hole_d, h = beam_w + 2);
    }
    dt([0, -beam_w/2, beam_h/2], [0, -1, 0], [1, 0, 0], beam_w, male = true);
    dt([0, 0, beam_w], [0, 0, 1], [0, 1, 0], beam_w, male = true, f = [1, 0, 0]);
}

// ===================== MAQUETA DE LA PCB (sólo para ver/verificar) ==========
// header (plástico + pines) de la maqueta
module hdr(b) {
    color("#111") translate([b[0], b[1], 0]) cube([b[2]-b[0], b[3]-b[1], hdr_body_h]);
    color("gold") for (x = [b[0]+hdr_pitch/2 : hdr_pitch : b[2]-0.1], y = [b[1]+hdr_pitch/2 : hdr_pitch : b[3]-0.1])
        translate([x-0.32, y-0.32, 0]) cube([0.64, 0.64, hdr_pin_h]);
}

module pcb(full = true) {
    color("#2b2b2b") difference() {
        linear_extrude(pcb_t) rrect(0, 0, pcb_w, pcb_l, pcb_r);
        for (h = holes) translate([h[0], h[1], -1]) cylinder(d = hole_d, h = 5);
    }
    if (full) translate([0, 0, pcb_t]) {
        for (b = windows) if (b != term_box) hdr(b);
        color("#3cb043") translate([term_box[0], term_box[1], 0]) cube([term_size[0], term_size[1], term_h]);
        color("silver") translate([usb_c[0]-usb_w/2, usb_c[1]-3.7, 0]) cube([usb_w, 7.5 + 0.4, usb_h]);
        color("#aaa") translate([esp_c[0]-esp_size[0]/2, esp_c[1]-esp_size[1]/2, 0]) cube([esp_size[0], esp_size[1], esp_h]);
        color("#333") translate([ant_box[0], ant_box[1], 0]) cube([ant_box[2]-ant_box[0], ant_box[3]-ant_box[1], 0.8]);
        for (p = [btn_boot, btn_reset]) color("#ddd") translate([p[0]-1.4, p[1]-2.45, 0]) cube([2.8, 4.9, btn_h]);
        color("white") translate([led_rgb[0]-2.5, led_rgb[1]-2.5, 0]) cube([5, 5, 1.6]);
        color("#ddd") translate([qwiic_c[0]-qwiic_size[0]/2, qwiic_c[1]-qwiic_size[1]/2, 0]) cube([qwiic_size[0], qwiic_size[1], qwiic_h]);
        for (p = [drv1_c, drv2_c]) color("#222") translate([p[0]-2.5, p[1]-3, 0]) cube([5, 6, 1.75]);
        color("#555") translate([25, 53, 0]) cube([5.5, 10, 1.75]);           // CH340G (aprox.)
        color("#888") translate([8.5, 52.5, 0]) cube([6.5, 7, smd_max_h - 1]); // regulador (aprox.)
        color("#999") translate([32.7, 56.4, 0]) cube([2.8, 3.3, smd_max_h]);  // cristal (aprox.)
    }
    // soldaduras inferiores
    if (full) color("#999") translate([0, 0, -bottom_clear]) for (b = windows) if (b != term_box)
        for (x = [b[0]+hdr_pitch/2 : hdr_pitch : b[2]-0.1], y = [b[1]+hdr_pitch/2 : hdr_pitch : b[3]-0.1])
            translate([x-0.6, y-0.6, 0]) cube([1.2, 1.2, bottom_clear]);
}

// ============================ SALIDA ==================================
if (parte == "base") base();
else if (parte == "tapa") tapa();
else if (parte == "tapa_imprimir") translate([0, 0, z_lid_top]) rotate([180, 0, 0]) tapa();
else if (parte == "pcb") pcb();
else if (parte == "adaptador") translate([0, 0, -z_ad_bot]) adaptador();
else if (parte == "viga") viga();
else if (parte == "llave") llave();
else if (parte == "conector_L") conector_L();
else if (parte == "conector_vertical") conector_vertical();
else if (parte == "sistema") {
    // ejemplo: carcasa sobre el adaptador, vigas a los lados y una columna vertical
    color("#e8e8ec") base();
    pcb();
    color("#2d6cdf") tapa();
    color("#f2a516") adaptador();
    color("#3a3a3a") {
        // viga perpendicular encastrada en el canto izquierdo
        translate([out_x0 - beam_len(5), out_y0 + out_l*0.3, z_ad_bot]) viga(5);
        // viga perpendicular en el canto derecho (girada 180°)
        translate([out_x0 + out_w + beam_len(5), out_y0 + out_l*0.7, z_ad_bot]) rotate(180) viga(5);
        // viga paralela al canto delantero, unida con dos llaves
        translate([out_x0 + 4, out_y0 - beam_w/2, z_ad_bot]) viga(6);
    }
    color("#d43f3a") for (x = [out_x0 + 12, out_x0 + 36]) translate([x, out_y0, z_ad_bot + beam_h/2]) multmatrix([[0, 0, 1, 0], [1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 0, 1]]) llave();
    // columna: conector vertical en la ranura trasera + viga de pie
    color("#d43f3a") translate([out_x0 + out_w*0.75, out_y0 + out_l + beam_w/2, z_ad_bot]) conector_vertical();
    color("#3a3a3a") translate([out_x0 + out_w*0.75, out_y0 + out_l + beam_w/2, z_ad_bot + beam_w]) rotate([0, -90, 0]) translate([0, 0, -beam_h/2]) viga(4);
}
else if (parte == "interferencia") {
    // debe quedar VACÍO si nada choca con la placa (con las alturas supuestas)
    intersection() { union() { base(); tapa(); } pcb(); }
}
else if (parte == "explotado") {
    if (con_adaptador) color("#f2a516") translate([0, 0, -explode * 0.8]) adaptador();
    color("#e8e8ec") base();
    translate([0, 0, explode * 0.6]) pcb();
    color("#2d6cdf", 0.95) translate([0, 0, explode * 1.6]) tapa();
}
else if (parte == "abierta") {
    color("#e8e8ec") base();
    pcb();
    // tapa volteada al lado, mostrando su cara interior
    color("#2d6cdf") translate([out_w + 8, pcb_l, z_lid_top + z_floor_bot]) rotate([180, 0, 0]) tapa();
}
else { // ensamble
    color("#e8e8ec") base();
    pcb();
    color("#2d6cdf") tapa();
}
