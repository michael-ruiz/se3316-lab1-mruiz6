var description = 
[
    "Bulbasaur \n#001 Type: Grass Height: 2' 04\" Weight: 15.2 lbs",
    "Ivysaur \n#002 Type: Grass Height: 3' 03\" Weight: 28.7 lbs",
    "Venusaur \n#003 Type: Grass Height: 6' 07\" Weight: 220.5 lbs",
    "Charmander \n#004 Type: Fire Height: 2' 00\" Weight: 18.7 lbs",
    "Charmeleon \n#005 Type: Fire Height: 3' 07\" Weight: 41.9 lbs",
    "Charizard \n#006 Type: Fire Height: 5' 07\" Weight: 199.5 lbs",
    "Squirtle \n#007 Type: Water Height: 1' 08\" Weight: 19.8 lbs",
    "Wartortle \n#008 Type: Water Height: 3' 03\" Weight: 49.6 lbs",
    "Blastoise \n#009 Type: Water Height: 5' 03\" Weight: 188.5 lbs",
    "Caterpie \n#010 Type: Bug Height: 1' 00\" Weight: 6.4 lbs",
    "Metapod \n#011 Type: Bug Height: 2' 04\" Weight: 21.8 lbs",
    "Butterfree \n#012 Type: Bug Height: 3' 07\" Weight: 70.5 lbs",
    "Weedle \n#013 Type: Bug Height: 1' 00\" Weight: 7.1 lbs",
    "Kakuna \n#014 Type: Bug Height: 2' 00\" Weight: 22.0 lbs",
    "Beedrill \n#015 Type: Bug Height: 3' 03\" Weight: 65.0 lbs",
    "Pidgey \n#016 Type: Normal Height: 1' 00\" Weight: 4.0 lbs",
    "Pidgeotto \n#017 Type: Normal Height: 3' 07\" Height: 66.1 lbs",
    "Pidgeot \n#018 Type: Normal Height: 4' 11\" Weight: 87.1 lbs",
    "Rattata \n#019 Type: Normal Height: 1' 00\" Weight: 7.7 lbs",
    "Raticate \n#020 Type: Normal Height: 2' 04\" Weight: 40.8 lbs"
]

function allLetter()
{
    let input = document.getElementById("searchName");
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let lastLetter = input.value.charAt(input.value.length - 1);

    if (input.value.length <= 20)
    {
        if (letters.includes(lastLetter.toLowerCase()))
        {
            return true;
        }

        else 
        {
            input.value = "";
        }
    }

    else 
    {
        input.value = "";
    }
}

function allNumber()
{
    let input = document.getElementById("searchNumber");
    let lastDigit = input.value.charAt(input.value.length - 1);
    let numbers = "1234567890";

    if (numbers.includes(lastDigit))
    {
        if (1 <= input.value && input.value <= 20)
        {
            return true;
        }

        else 
        {
            input.value = "";
        }
    }

    else 
    {
        input.value = "";
    }
}

function searchName()
{
    let input, pokemon;
    let alertText = "";
    let count = 0;
    input = document.getElementById("searchName");
    pokemon = document.getElementsByTagName("li");

    for (i = 0; i < pokemon.length; i++)
    {
        pId = pokemon[i].getAttribute("id").toUpperCase();
        pName = pId.split("-")[0];
        text = input.value.toUpperCase();

        if (pName.includes(text) && count < 5)
        {
            pokemon[i].style.display = "";
            alertText += `${description[i]} \nView details On Screen \n----------------------\n`;
            count++;
        }

        else 
        {
            pokemon[i].style.display = "none";
        }
    }

    if (alertText == "")
    {
        alert("No Pokémon Found");
    }

    else 
    {
        alert(alertText);
    }
}

function searchNumber()
{
    let input, pokemon;
    let alertText = "";
    let count = 0;
    input = document.getElementById("searchNumber");
    pokemon = document.getElementsByTagName("li");

    for (i = 0; i < pokemon.length; i++)
    {
        pId = pokemon[i].getAttribute("id").toUpperCase();
        pNum = pId.split("-")[1];
        text = input.value;

        if ((pNum.indexOf(text) > -1) && count < 5)
        {
            pokemon[i].style.display = "";
            alertText += `${description[i]} \nView details On Screen \n----------------------\n`;
            count++;
        }

        else 
        {
            pokemon[i].style.display = "none";
        }
    }

    if (alertText == "")
    {
        alert("No Pokémon Found");
    }

    else 
    {
        alert(alertText);
    }
}

function resetSearch(opt)
{
    let input1 = document.getElementById("searchName");
    let input2 = document.getElementById("searchNumber");
    let pokemon = document.getElementsByTagName("li");

    if (opt == 0)
    {
        for (i = 0; i < pokemon.length; i++)
        {
            pId = pokemon[i].getAttribute("id").toUpperCase();
            pNum = pId.split(" ")[0];
            text = input1.value.toUpperCase();

            if (text == "" || text == null)
            {
                pokemon[i].style.display = "";
            }
        }
    }

    if (opt == 1)
    {
        for (i = 0; i < pokemon.length; i++)
        {
            pId = pokemon[i].getAttribute("id").toUpperCase();
            pNum = pId.split(" ")[2];
            text = input2.value;

            if (text == "" || text == null)
            {
                pokemon[i].style.display = "";
            }
        }
    }
}