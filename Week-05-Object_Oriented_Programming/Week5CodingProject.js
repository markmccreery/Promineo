/*This project was to make a menu application that allows you to create classes, 
create arrays, and to have the option to add/delete from the array.
For my project, I decided to focus it on a choir of singers with multiple parts in which the classes are the parts that
are in the choir.  For example, you can have a soprano, alto, tenor, and bass section. */

//describes a singer with their name and the voice part that they're singing in the section.

class Singer {
    constructor(name,voicePart){
    this.name = name;
    this.voicePart = voicePart;
    }

describe() {
    return `${this.name} sings in the ${this.voicePart} section.`;
}
}

//Defines what the name of the section is and what singers are a part of the section. 

class Section {
    constructor(name){
        this.name = name;
        this.singers = [];
    }

    addSinger(singer){
        if (singer instanceof Singer){
            this.singers.push(singer);
        } else {
            throw new Error (`You can only add an instance of Singer.  ${singer} is not an applicable argument.`)
        }
    }

    describe() {
        return `The ${this.name} section has ${this.singers.lengths} vocalists.`
    }
}

/*This is the pop-up menu.  This will show the options for creating the sections, viewing the sections that will allow you
to add/delete members, deleting sections that aren't needed anymore, and a full display of all the sections together. */

class Menu {
    constructor(){
        this.group = [];
        this.selectedSection = null;
    }

    start () {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createVoiceParts();
                    break;
                case '2':
                    this.viewVoiceParts();
                    break;
                case '3':
                    this.deleteVoiceParts();
                    break;
                case '4':
                    this.displayVoiceParts();
                    break;
                default:
                    selection = 0;

            }
            selection = this.showMainMenuOptions();
        }
        alert('Thank you for visiting!  We hope to see you again!')
    }
    showMainMenuOptions() {
        return prompt(`
        0) Exit 
        1) Create a new voice part in the choir
        2) View a specific section
        3) Delete a voice part
        4) Show all current voice parts`)   
    }
    showSectionMenuOptions(whatSection) {
        return prompt(`
        0) back
        1) Add a singer
        2) Delete a singer
        ------------------------------
        ${whatSection}
        `);
    }
    displayVoiceParts(){
        let voiceString = '';
        for (let i = 0; i < this.group.length; i++){
            voiceString += i + ') ' + this.group[i].name + '\n';
        }
        alert(voiceString);
    }
    createVoiceParts(){
        let name = prompt("Please enter the name of the new section:");
        this.group.push(new Section(name));
    }
    viewVoiceParts(){
        let index = prompt('Please enter the index of the voice section that you would like to view:');
        if (index > -1 && index < this.group.length) {
            this.selectedSection = this.group[index];
            let description = 'Section name: ' + this.selectedSection.name + '\n';

            for (let i = 0; i < this.selectedSection.singers.length; i++){
                description += i + ') ' + this.selectedSection.singers[i].name + ' - ' + this.selectedSection.singers[i].voicePart + '\n';
            }
            let selection = this.showSectionMenuOptions(description);
            switch (selection) {
                case '1':
                    this.addSinger();
                    break;
                case '2':
                    this.deleteSinger();
                    break;
            }
        }
    }

    deleteVoiceParts(){
        let index = prompt('Enter the index number of the voice section that you would like to delete:');
        if (index > -1 && index < this.group.length) {
            this.group.splice(index,1);
        }
    }

    addSinger(){
        let name = prompt("Please enter the singer's name:");
        let voicePart = prompt("Please enter the voice part of the singer:");
        this.selectedSection.singers.push(new Singer(name, voicePart));
    }

    deleteSinger(){
        let index = prompt('Please enter the index number of the singer you would like to remove:');
        if (index > -1 && index < this.selectedSection.group.length){
            this.selectedSection.singers.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();

