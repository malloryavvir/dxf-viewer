import { Pattern, RegisterPattern } from "../Pattern"

RegisterPattern(Pattern.ParsePatFile(`
*LATTICE-03
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
180,9.736666582,9.736666582,0,25.4,19.473333164,-5.926666836
180,9.736666582,15.663333418,0,25.4,19.473333164,-5.926666836
270,15.663333418,9.736666582,25.4,25.4,19.473333164,-5.926666836
270,9.736666582,9.736666582,25.4,25.4,19.473333164,-5.926666836
`))
