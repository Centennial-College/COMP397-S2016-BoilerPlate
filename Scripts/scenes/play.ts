/**
 * This is the generic scenes namespace
 * 
 * @module scenes
 */
module scenes {
    /**
     * This Play scene extends the objects.Scene object 
     * 
     * @export
     * @class Play
     * @extends {objects.Scene}
     */
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        private _playLabel: objects.Label;
        private _nextButton: objects.Button;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Play.
         */
        constructor() {
            super();
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method adds game objects to the play scene
         * 
         * @public
         * @method Start
         * @returns {void}
         */
        public Start(): void {

            // Add Play Label
            this._playLabel = new objects.Label(
                "PLAY SCENE",
                "60px",
                "Consolas",
                "#000",
                320,
                240);
            this.addChild(this._playLabel);

            // add the start button
            this._nextButton = new objects.Button(
                "nextButton",
                320,
                420,
                true);
            this.addChild(this._nextButton);

            // Start button event listener
            this._nextButton.on("click", this._nextButtonClick, this);

            // Add this scene to the global scene container
            core.stage.addChild(this);
        }

        /**
         * Update game objects in the play scene
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
         * @method _nextButtonClick
         * @param {createjs.MouseEvent} event
         * @returns {void}
         */
        private _nextButtonClick(event: createjs.MouseEvent) {
            // Switch the scene
            core.scene = config.Scene.OVER;
            core.changeScene();
        }
    }
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++