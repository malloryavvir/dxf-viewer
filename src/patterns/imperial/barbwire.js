import { Pattern, RegisterPattern } from "../../Pattern.js"

RegisterPattern(Pattern.ParsePatFile(`
*BARBWIRE,BARBWIRE
;By John Hyslop
;Developed in inch as imperial QCAD3 pattern
315,0.3,0.56,0.70710678,0.70710678,0.01414214,-1.40007143
288.434949,0.26,0.68,2.21359436,0.31622777,0.12649111,-3.03578655
158.198591,0.31,0.66,3.15682075,0.18569534,0.05385165,-5.33131316
116.565051,0.32,0.64,1.34164079,0.4472136,0.02236068,-2.2137073
116.565051,0.34,0.6,1.34164079,0.4472136,0.04472136,-2.19134662
111.801409,0.44,0.39,2.22834406,0.18569534,0.05385165,-5.33131316
156.801409,0.51,0.36,5.38356375,0.13130643,0.07615773,-7.53961537
289.653824,0.46,0.5,11.70450662,0.06726728,0.14866069,-14.71740806
194.036243,0.31,0.36,3.15296313,0.24253563,0.04123106,-4.08187457
251.565051,0.32,0.39,0.9486833,0.31622777,0.03162278,-3.13065488
254.054604,0.34,0.46,4.12081692,0.13736056,0.0728011,-7.20730879
74.744881,0.34,0.46,4.12217269,0.0877058,0.11401754,-11.28773671
135,0.36,0.44,0.70710678,0.70710678,0.02828427,-1.38592929
180,0.39,0.44,0,1,0.03,-0.97
270,0.39,0.45,0,1,0.01,-0.99
74.054604,0.39,0.45,4.12081692,0.13736056,0.1456022,-7.13450769
161.565051,0.42,0.44,0.9486833,0.31622777,0.03162278,-3.13065488
198.434949,0.45,0.45,2.21359436,0.31622777,0.03162278,-3.13065488
258.231711,0.5,0.69,5.09885635,0.04079085,0.24515301,-24.27014833
21.801409,0.45,0.67,2.22834406,0.18569534,0.05385165,-5.33131316
75.963757,0.43,0.59,0.9701425,0.24253563,0.08246211,-4.04064351
341.565051,0.4,0.6,0.9486833,0.31622777,0.03162278,-3.13065488
45,0.37,0.57,0.70710678,0.70710678,0.04242641,-1.37178716
288.434949,0.36,0.6,2.21359436,0.31622777,0.03162278,-3.13065488
0,0.34,0.6,0,1,0.02,-0.98
26.565051,0.32,0.59,1.34164079,0.4472136,0.02236068,-2.2137073
78.231711,0.27,0.35,5.09885635,0.04079085,0.24515301,-24.27014833
4.085617,0.78,0.48,13.03821015,0.07124705,0.14035669,-13.89531216
0,0.69,0.48,0,1,0.09,-0.91
354.289407,0.59,0.49,0.99503719,0.09950372,0.10049876,-9.94937686
356.185925,0.47,0.55,0.99778516,0.06651901,0.15033296,-14.88296341
351.469234,0.8,0.55,7.07089492,0.04944682,0.20223748,-20.02151093
0,0.66,0.55,0,1,0.14,-0.86
14.036243,0.46,0.5,3.15296313,0.24253563,0.20615528,-3.91695034
189.865807,0.7,0.51,17.26262336,0.04283529,0.23345235,-23.11178271
180,0.8,0.51,0,1,0.1,-0.9
171.469234,1,0.48,7.07089492,0.04944682,0.20223748,-20.02151093
186.115504,1,0.56,9.05531551,0.03551104,0.15644586,-28.00380982
5.52754,0.13777778,0.53333333,10.04982433,0.03210806,0.17302679,-30.97179621
3.691386,0,0.48,15.03326191,0.03219114,0.1515339,-30.91291524
348.310631,0,0.52,5.0989077,0.0337676,0.29614186,-29.31804393
348.690068,0,0.56,0.98058068,0.19611614,0.30594117,-4.79307834
`), false)
