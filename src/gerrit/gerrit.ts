import { Ref } from "./ref";
import { Logger } from "./logger";

export class Gerrit {
    private currentRef: Ref;
    private logger: Logger;

    constructor(private workspace: string, private repo: string, ref: Ref = null) {
        this.logger = Logger.logger;
        if (ref !== null) {
            this.currentRef = ref;
        }
    }

    public getCurrentRef(): Ref {
        return this.currentRef;
    }

    private setCurrentRef(ref: Ref) {
        this.currentRef = ref;
    }

    public commit(msg: string, files: string[], ammend: boolean): Promise<boolean> {
        return new Promise((resolve, reject) => {
            resolve(true);
        });
    }

    // TODO: isDirty maybe return Promise?
    private isDirty(): boolean {

        return false;
    }

    public checkoutBranch(branch: string): Promise<boolean> {
        return this.checkout("origin/" + branch);
    }

    public checkoutRef(ref: Ref): Promise<boolean> {
        if (this.isDirty()) {
            return;
        }

        this.setCurrentRef(ref);

        return new Promise((resolve, reject) => {
            this.fetch(ref.getUrl()).then(value => {
                this.checkout("FETCH_HEAD").then(value => {
                    resolve(true);
                }, reason => {
                    reject(reason);
                });
            }, reason => {
                reject(reason);
            });
        });
    }

    public cherrypickRef(ref: Ref): Promise<boolean> {
        if (this.isDirty()) {
            return;
        }

        this.setCurrentRef(ref);

        return new Promise((resolve, reject) => {
            this.fetch(ref.getUrl()).then(value => {
                this.cherrypick("FETCH_HEAD").then(value => {
                    resolve(true);
                }, reason => {
                    reject(reason);
                });
            }, reason => {
                reject(reason);
            });
        });

    }

    private fetch(url: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            resolve(true);
        });
    }

    private checkout(HEAD: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            resolve(true);
        });
    }

    private cherrypick(HEAD: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            resolve(true);
        });
    }

    public push(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            resolve(true);
        });
    }
}