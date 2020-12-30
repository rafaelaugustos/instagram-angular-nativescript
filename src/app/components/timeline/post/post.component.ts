import { Component, EventEmitter, Input } from '@angular/core'

@Component({
	selector: 'ns-timeline-post',
	templateUrl: './post.component.html',
    styleUrls: ['./post.component.css'],
    moduleId: module.id
})
export class PostComponent {
    @Input() item
    post = ''

    // onSetPost(){
    //     this.input.emit(this.post)
    // }
}
