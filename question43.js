// question 43. Accept an english alphabet from user and check if it is a consonent or a vowel; 

 let  alphabet =  prompt("Enter an alphabet");

 switch (alphabet) {
    case (("a" ||"A")||("e" || "E")|| ("i"||"I")|| ("o"||"O")||("u"||"U")):
        console.log("The entered alphabet is a vowel");
        break;
        
    default:
        console.log("  The entered alphabet is a consonent");

        break;
 }
