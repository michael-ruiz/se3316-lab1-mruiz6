var description = 
[
    "Bulbasaur \n#001",
    "Ivysaur \n#002",
    "Venusaur \n#003",
    "Charmander \n#004",
    "Charmeleon \n#005",
    "Charizard \n#006",
    "Squirtle \n#007",
    "Wartortle \n#008",
    "Blastoise \n#009",
    "Caterpie \n#010",
    "Metapod \n#011",
    "Butterfree \n#012",
    "Weedle \n#013",
    "Kakuna \n#014",
    "Beedrill \n#015",
    "Pidgey \n#016",
    "Pidgeotto \n#017",
    "Pidgeot \n#018",
    "Rattata \n#019",
    "Raticate \n#020"
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