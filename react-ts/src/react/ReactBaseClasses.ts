import { __DEV__ } from '../config/global';

import invariant from '../common/invariant';
import lowPriorityWarning from '../common/lowPriorityWarning';

import ReactNoopUpdateQueue from './ReactNoopUpdateQueue';

const emptyObject = {};

if(__DEV__) {
    Object.freeze(emptyObject);
}
// todo UpdateQueue
export class Component{
    public props: object;
    public context: any;
    public refs: object = emptyObject;
    public updater: any = ReactNoopUpdateQueue;
    constructor(props: object, context: any, updater: any) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
    }

    isReactComponent = {};
}