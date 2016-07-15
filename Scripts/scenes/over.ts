/**
 * This is the generic scenes namespace
 * 
 * @module scenes
 */
module scenes {
    /**
     * This Over scene extends the objects.Scene object 
     * 
     * @export
     * @class Over
     * @extends {objects.Scene}
     */
    export class Over extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        private _gameOverLabel: objects.Label;
        private _restartButton: objects.Button;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Over.
         */
        constructor() {
            super();
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method adds game objects to the Over scene
         * 
         * @public
         * @method Start
         * @returns {void}
         */
        public Start(): void {

            // Add GameOver Label
            this._gameOverLabel = new objects.Label(
                "GAME OVER SCENE",
                "60px",
                "Consolas",
                "#000",
                320,
                240);
            this.addChild(this._gameOverLabel);

            // add the restart button
            this._restartButton = new objects.Button(
                "restartButton",
                320,
                420,
                true);
            this.addChild(this._restartButton);

            // Restart button event listener
            this._restartButton.on("click", this._restartButtonClick, this);

            // Add this scene to the global scene container
            core.stage.addChild(this);
        }

        /**
         * Update game objects in the Over scene
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
         * @method _restartOverButtonClick
         * @param {createjs.MouseEvent} event
         * @returns {void}
         */
        private _restartButtonClick(event: createjs.MouseEvent) {
            // Switch the scene
            core.scene = config.Scene.PLAY;
            core.changeScene();
        }
    }
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++