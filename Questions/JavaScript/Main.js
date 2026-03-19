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
    var Task_Answer_1_Is_Correct;
    event.preventDefault();
    Task_Answer_1 = document.querySelector(`[name = "${id}"]:checked`).value;
    if (Task_Answer_1 == 2)
    {
        Task_Answer_1_Is_Correct = true;
    }
    else
    {
        Task_Answer_1_Is_Correct = false;
    }
}
function Answer_2(id)
{
    var Task_Answer_2;
    var Task_Answer_2_Is_Correct;
    event.preventDefault();
    Task_Answer_2 = document.querySelector(`[name = "${id}"]:checked`).value;
    if (Task_Answer_2 == 2)
    {
        Task_Answer_2_Is_Correct = true;
    }
    else
    {
        Task_Answer_2_Is_Correct = false;
    }
}
function Answer_3(id)
{
    var Task_Answer_3;
    var Task_Answer_3_Is_Correct;
    event.preventDefault();
    Task_Answer_3 = document.querySelector(`[name = "${id}"]:checked`).value;
    if (Task_Answer_3 == 2)
    {
        Task_Answer_3_Is_Correct = true;
    }
    else
    {
        Task_Answer_3_Is_Correct = false;
    }
}
function Answer_4(id)
{
    var Task_Answer_4;
    var Task_Answer_4_Is_Correct;
    event.preventDefault();
    Task_Answer_4 = document.querySelector(`[name = "${id}"]:checked`).value;
    if (Task_Answer_4 == 2)
    {
        Task_Answer_4_Is_Correct = true;
    }
    else
    {
        Task_Answer_4_Is_Correct = false;
    }
}
function Answer_5(id)
{
    var Task_Answer_5;
    var Task_Answer_5_Is_Correct;
    event.preventDefault();
    Task_Answer_5 = document.querySelector(`[name = "${id}"]:checked`).value;
    if (Task_Answer_5 == 2)
    {
        Task_Answer_5_Is_Correct = true;
    }
    else
    {
        Task_Answer_5_Is_Correct = false;
    }
}
function Answer_6(id)
{
    var Task_Answer_6;
    var Task_Answer_6_Is_Correct;
    event.preventDefault();
    Task_Answer_6 = document.querySelector(`[name = "${id}"]:checked`).value;
    if (Task_Answer_6 == 3)
    {
        Task_Answer_6_Is_Correct = true;
    }
    else
    {
        Task_Answer_6_Is_Correct = false;
    }
}
function Answer_7(id)
{
    var Task_Answer_7;
    var Task_Answer_7_Is_Correct;
    event.preventDefault();
    Task_Answer_7 = document.querySelector(`[name = "${id}"]:checked`).value;
    if (Task_Answer_7 == 1)
    {
        Task_Answer_7_Is_Correct = true;
    }
    else
    {
        Task_Answer_7_Is_Correct = false;
    }
}
function Answer_8(id)
{
    var Task_Answer_8;
    var Task_Answer_8_Is_Correct;
    event.preventDefault();
    Task_Answer_8 = document.querySelector(`[name = "${id}"]:checked`).value;
    if (Task_Answer_8 == 1)
    {
        Task_Answer_8_Is_Correct = true;
    }
    else
    {
        Task_Answer_8_Is_Correct = false;
    }
}
function Answer_9(id)
{
    var Task_Answer_9;
    var Task_Answer_9_Is_Correct;
    event.preventDefault();
    Task_Answer_9 = document.querySelector(`[name = "${id}"]:checked`).value;
    if (Task_Answer_9 == 3)
    {
        Task_Answer_9_Is_Correct = true;
    }
    else
    {
        Task_Answer_9_Is_Correct = false;
    }
}
function Answer_10(id)
{
    var Task_Answer_10;
    var Task_Answer_10_Is_Correct;
    event.preventDefault();
    Task_Answer_10 = document.querySelector(`[name = "${id}"]:checked`).value;
    if (Task_Answer_10 == 2)
    {
        Task_Answer_10_Is_Correct = true;
    }
    else
    {
        Task_Answer_10_Is_Correct = false;
    }
}
function Calculating_Count_Of_Questions_Answered_Correctly()
{
    if (Task_Answer_1_Is_Correct == true)
    {
        Count_Of_Questions_Answered_Correctly += 1;
    }
    if (Task_Answer_2_Is_Correct == true)
    {
        Count_Of_Questions_Answered_Correctly += 1;
    }
    if (Task_Answer_3_Is_Correct == true)
    {
        Count_Of_Questions_Answered_Correctly += 1;
    }
    if (Task_Answer_4_Is_Correct == true)
    {
        Count_Of_Questions_Answered_Correctly += 1;
    }
    if (Task_Answer_5_Is_Correct == true)
    {
        Count_Of_Questions_Answered_Correctly += 1;
    }
    if (Task_Answer_6_Is_Correct == true)
    {
        Count_Of_Questions_Answered_Correctly += 1;
    }
    if (Task_Answer_7_Is_Correct == true)
    {
        Count_Of_Questions_Answered_Correctly += 1;
    }
    if (Task_Answer_8_Is_Correct == true)
    {
        Count_Of_Questions_Answered_Correctly += 1;
    }
    if (Task_Answer_9_Is_Correct == true)
    {
        Count_Of_Questions_Answered_Correctly += 1;
    }
    if (Task_Answer_10_Is_Correct == true)
    {
        Count_Of_Questions_Answered_Correctly += 1;
    }
    alert("Количество правильных ответов — " + Count_Of_Questions_Answered_Correctly);
}