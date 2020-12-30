import { Component } from '@angular/core'

@Component({
	selector: 'ns-timeline-list',
	templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
    moduleId: module.id
})
export class ListComponent {
    public posts: Array<object> = [
        {
            id: 1,
            avatar: 'https://www.cinemaemserie.com.br/wp-content/uploads/2013/11/Ted.jpg',
            hours: '16 hours ago',
            picture: 'https://i2.wp.com/espalhafactos.com/wp-content/uploads/2013/08/Ted-Mosby-ted-mosby-18599317-540-360.jpg?fit=540%2C360&ssl=1',
            username: '@tedmosby ',
            name: 'Ted Mosby',
            text: 'Nothing good happens after 2:00 am… when 2:00 am rolls around, just go home and go to sleep.'
        },
        {
            id: 2,
            avatar: 'https://i1.wp.com/www.ofilmante.com.br/wp-content/uploads/2016/12/Robin-1-768x1024.jpg?resize=500%2C667',
            hours: '18 hours ago',
            picture: 'https://rollingstone.uol.com.br/media/_versions/ted_e_robin_reproducao_corte_original_widelg.jpg',
            username: '@robinscherbatsky ',
            name: 'Robin Scherbatsky',
            text: 'Destined? Aren\'t you tired of waiting for destiny, Ted? Isn\'t it time to make your own destiny?'
        },
        {
            id: 3,
            avatar: 'https://upload.wikimedia.org/wikipedia/pt/a/a2/Lily_Aldrin.jpg',
            hours: '19 hours ago',
            picture: 'https://static3.srcdn.com/wordpress/wp-content/uploads/2020/01/Ted-and-Lily-in-How-I-Met-Your-Mother.jpg?q=50&fit=crop&w=740&h=370',
            username: '@lilyaldrin ',
            name: 'Lily Aldrin',
            text: 'Say goodbye to all the times you felt lost, to all the times it was a No instead of a Yes, to all the scrapes and bruises, to all the heartache.'
        },
        {
            id: 4,
            avatar: 'https://pm1.narvii.com/6524/7c03b0256e41ab3f523fefde0a4e750a34253aef_00.jpg',
            hours: '20 hours ago',
            picture: 'https://images.virgula.com.br/2016/10/dancing-dunk-at-a-club-creep-marshall-how-i-meet-your-mother.gif',
            username: '@marshalleriksen ',
            name: 'Marshall Eriksen',
            text: 'You have to let me dance my own battles.'
        },
        {
            id: 5,
            avatar: 'https://i.pinimg.com/originals/b9/e2/b3/b9e2b367ec3cdd3db683803f36e40b64.jpg',
            hours: '22 hours ago',
            picture: 'https://mhmcdn.ynvolve.net/?w=750&h=450&quality=90&clipping=landscape&url=//manualdohomemmoderno.com.br/files/2015/05/17-Teorias-de-relacionamentos-de-Barney-Stinson-em-How-I-Met-Your-Mother-3.jpg&format=webp&hash=da8129237a8d31c6e2e9bff448b5194efc938c9a83212896b0193121f9d878c6',
            username: '@barneystinson ',
            name: 'Barney Stinson',
            text: 'Think of me like Yoda, but instead of being little and green I wear suits and I’m awesome. I’m your bro—I’m Broda!'
        }

    ]
}
