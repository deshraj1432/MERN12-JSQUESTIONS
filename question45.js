// 45- Project Restuarent v 1.0

let choice;
do {
    console.log("For Indian Food type 1 \nFor Italian Food type 2 \nFor Russian Food type 3 \nFor Chinese Food type 4");
    choice = prompt("Enter a choice number");

    switch (choice) {
        case '1':
            console.log("For Paratha type 1 \nFor Samosa type 2 \nFor Biryani type 3");
            choice = prompt("Enter a choice number");
            switch (choice) {
                case '1':
                    console.log("Paratha");
                    break;
                case '2':
                    console.log("Samosa");
                    break;
                case '3':
                    console.log("Biryani");
                    break;
            }
            break;
        case '2':
            console.log("For Pizza type 1 \nFor Pasta type 2 \nFor Lasagna type 3");
            choice = prompt("Enter a choice number");
            switch (choice) {
                case '1':
                    console.log("Pizza");
                    break;
                case '2':
                    console.log("Pasta");
                    break;
                case '3':
                    console.log("Lasagna");
                    break;
            }
            break;
        case '3':
            console.log("For Medovik type 1 \nFor Solyanka type 2 \nFor Pelmeni type 3");
            choice = prompt("Enter a choice number");
            switch (choice) {
                case '1':
                    console.log("Medovik");
                    break;
                case '2':
                    console.log("Solyanka");
                    break;
                case '3':
                    console.log("Pelmeni");
                    break;
            }
            break;
        case '4':
            console.log("For Wonton Soup type 1 \nFor Dim Sum type 2 \nFor Hot Pot type 3");
            choice = prompt("Enter a choice number");
            switch (choice) {
                case '1':
                    console.log("Wonton Soup");
                    break;
                case '2':
                    console.log("Dim Sum");
                    break;
                case '3':
                    console.log("Hot Pot");
                    break;
            }
            break;
    }
} while (choice !== '0');
