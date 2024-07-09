let nomeHeroi = "Mario";
let xpHeroi = 9800;


function classificarHeroi(xp)
{
    switch(true)
    {
        case (xp < 1000):
            
            return "Ferro";

            case (xp >=1001 && xp <=2000):
            
                return "Bronze";
            
            case (xp >=2001 && xp <= 5000):
            
                return "Prata";
            
            case(xp >= 5001 && xp <= 7000):
            
                return "Ouro";
            
            case (xp >= 7001 && xp <= 8000):
            
                return "Platina";
            
            case (xp >= 8001 && xp <= 9000):
            
               return "Ascendente";
            
           case (xp >= 9001 && xp <= 10000):
            
                return "Imortal";
            
             case (xp >= 10001):
            
              return "Radiante";
    }
}

let nivelHeroi = classificarHeroi(xpHeroi);
console.log(`O Herói de nome ${nomeHeroi} está no nivel de ${nivelHeroi}`);



