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
    let result = "";
    let count = 0;
    let resultList = document.createElement("ul");
    let input = document.getElementById("searchName");
    let pokemon = document.getElementsByClassName("static");

    for (i = 0; i < pokemon.length; i++)
    {
        pId = pokemon[i].getAttribute("id").toUpperCase();
        pName = pId.split("-")[0];
        text = input.value.toUpperCase();

        if (pName.includes(text) && count < 5)
        {
            pokemonText = pokemon[i].innerHTML;
            result += `<li class="result">${pokemonText}</li>`;
            count++;
        }
    }

    if (document.getElementById("resultList") != null)
    {
        document.getElementById("resultList").parentNode.removeChild(document.getElementById("resultList"));
    }

    if (result != "")
    {
       resultList.innerHTML = result;
       resultList.className = "list";
       resultList.id = "resultList";
       document.getElementById("results").appendChild(resultList);
       result = "";
    }

    if (input.value == "")
    {
        document.getElementById("resultList").parentNode.removeChild(document.getElementById("resultList"));
    }
}

function searchNumber()
{
    let result = "";
    let count = 0;
    let resultList = document.createElement("ul");
    let input = document.getElementById("searchNumber");
    let pokemon = document.getElementsByClassName("static");

    for (i = 0; i < pokemon.length; i++)
    {
        pId = pokemon[i].getAttribute("id").toUpperCase();
        pNum = pId.split("-")[1];
        text = input.value;

        if ((pNum.indexOf(text) > -1) && count < 5)
        {
            pokemonText = pokemon[i].innerHTML;
            result += `<li class="result">${pokemonText}</li>`;
            count++;
        }
    }

    if (document.getElementById("resultList") != null)
    {
        document.getElementById("resultList").parentNode.removeChild(document.getElementById("resultList"));
    }

    if (result != "")
    {
       resultList.innerHTML = result;
       resultList.className = "list";
       resultList.id = "resultList";
       document.getElementById("results").appendChild(resultList);
       result = "";
    }

    if (input.value == "")
    {
        document.getElementById("resultList").parentNode.removeChild(document.getElementById("resultList"));
    }
}