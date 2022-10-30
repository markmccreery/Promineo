class Singer {
    constructor(name,voicePart){
    this.name = name;
    this.voicePart = voicePart;
    }

describe() {
    return `${this.name} sings in the ${this.voicePart} section.`;
}
}

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
            voiceString += i + ') ' + this.group[i].name + for(let i = 0; i < this.selectedSection.length; i++){
                this.selectedSection.name;
            } + '\n';
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

