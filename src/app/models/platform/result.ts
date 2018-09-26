// the model for all methods form our services (RESTful HTTPClient services)

export class Result<dataType> {
    constructor(
        public isDone: boolean = true,
        public hasException: boolean = false,
        public errorCode: number = null,
        public serverMessage: string = null,
        public id: number = null,
        public value: string = null,
        public datum: dataType = null

    ) { }

}

