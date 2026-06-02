function atv (c){
    switch (c) {
        case 1:
            function desc (valor,desconto){
                console.log("Valor original: " + valor+ " | Desconto: " + desconto + "%")
                console.log("Valor com desconto: " + (valor-(valor*(desconto/100))))    
            }
            desc(100,10)
        break;
        case 2:
            function hipo(c1,c2){
                console.log("Hipotenusa: " + Math.sqrt((c1*c1)+(c2*c2)))
            }
            hipo(4,3)
        break;
        case 3:
            function dia(nome,horario){
                if(horario >= 0 && horario < 6){
                    console.log(`Boa madrugada, ${nome}`)
                } else if (horario >= 6 && horario < 12){
                    console.log(`Bom dia, ${nome}`)
                } else if (horario >= 12 && horario < 18){
                    console.log(`Boa tarde, ${nome}`)
                } else if(horario >= 18 && horario < 24){
                    console.log(`Boa noite, ${nome}`)
                }else {
                    console.log("Horário inválido")
                }
            }
            dia("João", 1)
     break;
   }
}

atv(1)

