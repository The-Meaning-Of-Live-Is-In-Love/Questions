var Count_Of_Questions_Answered_Correctly;
var Task_Answer_1_Is_Correct;
var Task_Answer_2_Is_Correct;
var Task_Answer_3_Is_Correct;
var Task_Answer_4_Is_Correct;
var Task_Answer_5_Is_Correct;
var Task_Answer_6_Is_Correct;
var Task_Answer_7_Is_Correct;
var Task_Answer_8_Is_Correct;
var Task_Answer_9_Is_Correct;
var Task_Answer_10_Is_Correct;
function Answer_1(id)
{
    var Task_Answer_1;
    event.preventDefault();
    Task_Answer_1 = document.querySelector(`[name = "${id}"]:checked`).value;
    if (Task_Answer_1 == 2)
    {
        localStorage.setitem('Task_Answer_1_Is_Correct', 'true');
    }
    else
    {
        localStorage.setitem('Task_Answer_1_Is_Correct', 'false');
    }
}
function Answer_2(id)
{
    var Task_Answer_2;
    event.preventDefault();
    Task_Answer_2 = document.querySelector(`[name = "${id}"]:checked`).value;
    if (Task_Answer_2 == 2)
    {
        localStorage.setitem('Task_Answer_2_Is_Correct', 'true');
    }
    else
    {
        localStorage.setitem('Task_Answer_2_Is_Correct', 'false');
    }
}
function Answer_3(id)
{
    var Task_Answer_3;
    event.preventDefault();
    Task_Answer_3 = document.querySelector(`[name = "${id}"]:checked`).value;
    if (Task_Answer_3 == 2)
    {
        localStorage.setitem('Task_Answer_3_Is_Correct', 'true');
    }
    else
    {
        localStorage.setitem('Task_Answer_3_Is_Correct', 'false');
    }
}
function Answer_4(id)
{
    var Task_Answer_4;
    event.preventDefault();
    Task_Answer_4 = document.querySelector(`[name = "${id}"]:checked`).value;
    if (Task_Answer_4 == 2)
    {
        localStorage.setitem('Task_Answer_4_Is_Correct', 'true');
    }
    else
    {
        localStorage.setitem('Task_Answer_4_Is_Correct', 'false');
    }
}
function Answer_5(id)
{
    var Task_Answer_5;
    event.preventDefault();
    Task_Answer_5 = document.querySelector(`[name = "${id}"]:checked`).value;
    if (Task_Answer_5 == 2)
    {
        localStorage.setitem('Task_Answer_5_Is_Correct', 'true');
    }
    else
    {
        localStorage.setitem('Task_Answer_5_Is_Correct', 'false');
    }
}
function Answer_6(id)
{
    var Task_Answer_6;
    event.preventDefault();
    Task_Answer_6 = document.querySelector(`[name = "${id}"]:checked`).value;
    if (Task_Answer_6 == 3)
    {
        localStorage.setitem('Task_Answer_6_Is_Correct', 'true');
    }
    else
    {
        localStorage.setitem('Task_Answer_6_Is_Correct', 'false');
    }
}
function Answer_7(id)
{
    var Task_Answer_7;
    event.preventDefault();
    Task_Answer_7 = document.querySelector(`[name = "${id}"]:checked`).value;
    if (Task_Answer_7 == 1)
    {
        localStorage.setitem('Task_Answer_7_Is_Correct', 'true');
    }
    else
    {
        localStorage.setitem('Task_Answer_7_Is_Correct', 'false');
    }
}
function Answer_8(id)
{
    var Task_Answer_8;
    event.preventDefault();
    Task_Answer_8 = document.querySelector(`[name = "${id}"]:checked`).value;
    if (Task_Answer_8 == 1)
    {
        localStorage.setitem('Task_Answer_8_Is_Correct', 'true');
    }
    else
    {
        localStorage.setitem('Task_Answer_8_Is_Correct', 'false');
    }
}
function Answer_9(id)
{
    var Task_Answer_9;
    event.preventDefault();
    Task_Answer_9 = document.querySelector(`[name = "${id}"]:checked`).value;
    if (Task_Answer_9 == 3)
    {
        localStorage.setitem('Task_Answer_9_Is_Correct', 'true');
    }
    else
    {
        localStorage.setitem('Task_Answer_9_Is_Correct', 'false');
    }
}
function Answer_10(id)
{
    var Task_Answer_10;
    event.preventDefault();
    Task_Answer_10 = document.querySelector(`[name = "${id}"]:checked`).value;
    if (Task_Answer_10 == 2)
    {
        localStorage.setitem('Task_Answer_10_Is_Correct', 'true');
    }
    else
    {
        localStorage.setitem('Task_Answer_10_Is_Correct', 'false');
    }
}
function Calculating_Count_Of_Questions_Answered_Correctly()
{
    event.preventDefault();
    if (localStorage.getItem('Task_Answer_1_Is_Correct') == true)
    {
        Count_Of_Questions_Answered_Correctly += 1;
    }
    if (localStorage.getItem('Task_Answer_2_Is_Correct') == true)
    {
        Count_Of_Questions_Answered_Correctly += 1;
    }
    if (localStorage.getItem('Task_Answer_3_Is_Correct') == true)
    {
        Count_Of_Questions_Answered_Correctly += 1;
    }
    if (localStorage.getItem('Task_Answer_4_Is_Correct') == true)
    {
        Count_Of_Questions_Answered_Correctly += 1;
    }
    if (localStorage.getItem('Task_Answer_5_Is_Correct') == true)
    {
        Count_Of_Questions_Answered_Correctly += 1;
    }
    if (localStorage.getItem('Task_Answer_6_Is_Correct') == true)
    {
        Count_Of_Questions_Answered_Correctly += 1;
    }
    if (localStorage.getItem('Task_Answer_7_Is_Correct') == true)
    {
        Count_Of_Questions_Answered_Correctly += 1;
    }
    if (localStorage.getItem('Task_Answer_8_Is_Correct') == true)
    {
        Count_Of_Questions_Answered_Correctly += 1;
    }
    if (localStorage.getItem('Task_Answer_9_Is_Correct') == true)
    {
        Count_Of_Questions_Answered_Correctly += 1;
    }
    if (localStorage.getItem('Task_Answer_10_Is_Correct') == true)
    {
        Count_Of_Questions_Answered_Correctly += 1;
    }
    alert("Количество правильных ответов — " + Count_Of_Questions_Answered_Correctly);
}