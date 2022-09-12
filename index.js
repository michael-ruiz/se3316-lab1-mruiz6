function allLetter()
{
    var input = document.getElementById("searchName");
    var letters = /^[A-Za-z]+$/;

    if(input.value.match(letters))
    {
        return true;
    }

    else 
    {
        input.value = "";
    }
}

function searchName()
{
    var input, pokemon, alertText;
    input = document.getElementById("searchName");
    pokemon = document.getElementsByTagName("li");

    for (i = 0; i < pokemon.length; i++)
    {
        pId = pokemon[i].getAttribute("id").toUpperCase();
        pName = pId.split(" ")[0];
        text = input.value.toUpperCase();

        if (text == pName)
        {
            alertText = "Pokémon Found! \n" + pId;
            break;
        }

        else 
        {
            alertText = "No Pokémon Found";
        }
    }
    alert(alertText);
}

function searchNumber(){}