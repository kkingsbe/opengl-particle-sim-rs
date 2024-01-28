#ifdef GL_ES
precision mediump float;
#endif

uniform float u_resolution;
uniform float u_time;

vec3 colorA = vec3(0.149,0.141,0.912);
vec3 colorB = vec3(1.000,0.833,0.224);

void main() {
    vec3 color = vec3(0.0);
    vec2 st = gl_FragCoord.xy/u_resolution;

    // Mix uses pct (a value from 0-1) to
    // mix the two colors
    color = mix(colorA, colorB, vec3(sin(u_time / 2.), cos(u_time / 3.), sin(u_time / 4.)));

    gl_FragColor = vec4(color,1.0);
}