class ReactComponent {
    static displayName: string;
    static isReactComponent: object = {};
    
    public props: object;
    public state?: object;

    constructor(props: object) {
        this.props = props;
    }
};

ReactComponent.displayName = 'ReactClass';