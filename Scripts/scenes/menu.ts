/**
 * This is the generic scenes namespace
 * 
 * @module scenes
 */
module scenes {
    /**
     * This Menu scene extends the objects.Scene object 
     * 
     * @export
     * @class Menu
     * @extends {objects.Scene}
     */
    export class Menu extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        private _menuLabel: objects.Label;
        private _startButton: objects.Button;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Menu.
         */
        constructor() {
            super();
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method adds game objects to the menu scene
         * 
         * @public
         * @method Start
         * @returns {void}
         */
        public Start(): void {

            // Add Menu Label
            this._menuLabel = new objects.Label(
                "MENU SCENE",
                "60px",
                "Consolas",
                "#000",
                320,
                240);
            this.addChild(this._menuLabel);

            // add the start button
            this._startButton = new objects.Button(
                "startButton",
                320,
                420,
                true);
            this.addChild(this._startButton);

            // Start button event listener
            this._startButton.on("click", this._startButtonClick, this);

            // Add this scene to the global scene container
            core.stage.addChild(this);
        }

        /**
         * Update game objects in the menu scene
         * 
         * @public
         * @method Update
         * @returns {void}
         */
        public Update(): void {
            // scene updates happen here...
        }


        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // EVENT HANDLERS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This is an event handler for the click event
         * 
         * @private
         * @method _startOverButtonClick
         * @param {createjs.MouseEvent} event
         * @returns {void}
         */
        private _startButtonClick(event: createjs.MouseEvent) {
            // Switch the scene
            core.scene = config.Scene.PLAY;
            core.changeScene();
        }
    }
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++