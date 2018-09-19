import { Input, Output, EventEmitter } from '@angular/core';
export class WebComponentBase<TModel> {

    @Input('model') public model: TModel = null;

    @Input('title') public title: string = null;

    @Input('webComponentMode') public webComponentMode: 'edit' | 'new' | 'view';

    @Output() public close: EventEmitter<any> = new EventEmitter();

    public onCloseDialog(): void {
        this.close.emit();
    }
}


