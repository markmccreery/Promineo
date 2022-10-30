class Team {
    constructor (teamName){
        this.teamName = teamName;
        this.members = [];
    }

    addSuperHero(heroName, power){
        this.members.push(new Member(heroName, power));
    }
}

class Member {
    constructor (heroName, power){
        this.heroName = heroName;
        this.power = power;
    }
}

class Station {
    static url = "https://635219509d64d7c7130e8cfb.mockapi.io/Team"

    static getAllTeams(){
    return $.get(this.url);
}

static getTeam(id){
    return $.get(this.url + `/${id}`);
}

static createTeam(team){
    return $.post(this.url, team);
}

static updateTeam(team){
    
    return $.ajax({
        url: this.url + `/${team.id}`,
        dataType: 'json',
        data: JSON.stringify(team),
        contentType: 'application/json',
        type: 'PUT'
    });
}

static deleteTeam(id) {
    console.log(this.url + `${id}`);
    return $.ajax({
        url: this.url + `/${id}`,
        type: 'DELETE'
    });
}

}

class DOMManager {
    static teams;

    static getAllTeams() {
        Station.getAllTeams().then(teams => {
            this.render(teams)
        });
    }

    static createTeam(teamName) {
        Station.createTeam(new Team(teamName))
        .then(() => {
            return Station.getAllTeams();
        })
        .then((teams) => {
            this.render(teams)
        });
    }

    static deleteTeam(id) {
        console.log(id);
        Station.deleteTeam(id)
        .then(() => {
            console.log(id);
            return Station.getAllTeams();
        })
        .then((teams) => {
            this.render(teams)
        });
    }

    static addSuperHero(id) {
        for (let team of this.teams) {
            if (team.id == id) {
                
                team.members.push(new Member($(`#${team.id}-name`).val(), 
                $(`#${team.id}-powers`).val())); 

                Station.updateTeam(team) 
                    .then(() => {
                        return Station.getAllTeams();
                    })
                    .then((teams) => {
                        this.render(teams)
                    });
                }
            }
        }
    
        static deleteSuperHero(teamId, memberId){
            for (let team of this.teams){
                console.log(team.id, memberId, teamId);
                if (team.id == teamId) {
                    for (let member of team.members){
                        if (member.id == memberId) {
                            team.members.splice(team.members.indexOf(member), 1);
                            Station.updateTeam(team)
                            .then(() => {
                                return Station.getAllTeams();
                            })
                            .then((teams) => this.render(teams));
                        }
                        }
                    }
                }
            }
        
    
    static render(teams) {
        this.teams = teams;
        $('#app').empty();
        for (let team of teams) {
            $('#app').prepend(
                `<div id="${team.id}" class="card">
                <div class="card-header">
                <h2>${team.teamName}</h2>
                <button class="btn btn-danger" 
                onclick="DOMManager.deleteTeam('${team.id}')">Delete</button>
                </div>
                <div class="card-body">
                    <div class="card">
                        <div class="row">
                        <div class="col-sm">
                            <input type="text" id="${team.id}-team-member-name" class="form-control" placeholder="Super Hero Name">
                        </div>
                        <div class="col-sm">
                        <input type="text" id="${team.id}-team-member-power" class="form-control" placeholder="Power(s)">
                        </div>
                </div>
                <button id="${team.id}-new-member" 
                onclick="DOMManager.addSuperHero('${team.id}')" class="btn btn-primary form-control">Add Member</button> 
                </div>
                </div>
                </div>
                <br>`

            );
            
            for (let member of team.members) {
                $(`#${team.id}`).find('.card-body').append (
                    `<p>
                    <span id="name-${member.id}"><strong>Name: </strong> ${member.heroName}</span>
                    <span id="power-${member.id}"><strong>Powers: </strong> ${member.power}</span>
                    <button class="btn btn-danger" onclick="DOMManager.deleteSuperHero('${team.id}', '${member.id}')">Delete Member</button>
                    </p>`
                    
                    )
            }
        }
        
    }};

$('#create-new-hero-team').on('click', () => {
    DOMManager.createTeam($('#new-hero-team').val());
    $('#new-hero-team').val('');
});

DOMManager.getAllTeams();
