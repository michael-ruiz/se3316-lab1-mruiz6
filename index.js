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

function allNumber()
{
    var input = document.getElementById("searchNumber");
    var numbers = /\d/;

    if (input.value.match(numbers))
    {
        if (1 <= parseInt(input.value) && parseInt(input.value) <= 20)
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
    var input, pokemon;
    var count = 0;
    input = document.getElementById("searchName");
    pokemon = document.getElementsByTagName("li");

    for (i = 0; i < pokemon.length; i++)
    {
        pId = pokemon[i].getAttribute("id").toUpperCase();
        pName = pId.split(" ")[0];
        text = input.value.toUpperCase();

        if (pName.includes(text) && count < 5)
        {
            pokemon[i].style.display = "";
            count++;
        }

        else if (text == "" || text == null)
        {
            pokemon[i].style.display = "";
        }

        else 
        {
            pokemon[i].style.display = "none";
        }
    }
}

function searchNumber()
{
    var input, pokemon;
    var count = 0;
    input = document.getElementById("searchNumber");
    pokemon = document.getElementsByTagName("li");

    for (i = 0; i < pokemon.length; i++)
    {
        pId = pokemon[i].getAttribute("id").toUpperCase();
        pNum = pId.split(" ")[2];
        text = input.value.toUpperCase();

        if ((pNum.indexOf(text) > -1) && count < 5)
        {
            pokemon[i].style.display = "";
            count++;
        }

        else if (text == "" || text == null)
        {
            pokemon[i].style.display = "";
        }

        else 
        {
            pokemon[i].style.display = "none";
        }
    }
}