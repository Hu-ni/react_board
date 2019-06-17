
import {observable, action, computed} from "mobx";

class TimeStore{
    @observable current_time = null;
    @action getTime = async () => this.current_time = await new Date();
    @computed get ms() {
        return this.current_time ? this.current_time.getMilliseconds() : "not yet";
    }
}

export default TimeStore;