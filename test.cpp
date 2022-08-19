#include <bits/stdc++.h>
#include <string>
using namespace std;

int main() {
    fstream cin("in.txt");
    fstream cout("out.txt");

    string str = "HI", tostr;
    int cnt = 0;
    bool f = false;
    int randRating;
    int objId = 551491260;

    while (cnt <= 98) {
        getline(cin, str);
        cnt++;

        std::cout << str << std::endl;

        for (int i=0; str[i]; i++) {
            if (str[i] == ')') {
                tostr.push_back(',');
                tostr.push_back('1');
            }
            tostr.push_back(str[i]);
        }
        cout << tostr << endl;
        tostr.clear();

        // if (str[0] == ' ') {
        //     str.erase(str.begin());
        //     // cout << "INSERT INTO Actors VALUES ('" << str << "', " << randRating << ", " << objId << ");" << endl;
        // }
        // else {
        //     // cout << "INSERT INTO Actors VALUES ('" << str << "', " << randRating << ", " << objId << ");" << endl;
        // }
        // cout << str << endl << endl;

        // std::string const delims{ ".,:;!?" };

        // size_t beg, pos = 0;
        // while ((beg = str.find_first_not_of(delims, pos)) != std::string::npos)
        // {
        //     pos = str.find_first_of(delims, beg + 1);
        //     string newstr = str.substr(beg, pos - beg);

        //     randRating = 600 + rand() % 1400;
        //     objId += 10;

        //     if (newstr[0] == ' ') {
        //         newstr.erase(0, 1);
        //     }
        //     cout << "INSERT INTO Actors VALUES ('" << newstr << "', " << randRating << ", " << objId << ");" << endl;
        // }
    }

    return 0;
}