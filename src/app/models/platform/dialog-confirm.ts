
export class DialogConfirm {
    constructor(
        public message: string,
        public id?: number,
        public captionYes: string = 'Yes',
        public captionNo: string = 'No',
    ) { }
}
