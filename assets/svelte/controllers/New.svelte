<style global>
    /* @import '../../../node_modules/filepond/dist/filepond.css'; */
    /* @import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'; */

</style>
<script>
    import FilePond , {registerPlugin , supported} from "../../../node_modules/svelte-filepond/src/index";

    import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'

    import FilePondPluginImagePreview from 'filepond-plugin-image-preview'

    import FilePondPluginImageResize from 'filepond-plugin-image-resize'

    import FilePondPluginImageEdit from 'filepond-plugin-image-edit'

    import FilePondPluginImageTransform from 'filepond-plugin-image-transform'

    import { createEventDispatcher} from 'svelte'

    const dispatch = createEventDispatcher();
   

    registerPlugin(FilePondPluginImageExifOrientation ,FilePondPluginImagePreview, FilePondPluginImageResize , FilePondPluginImageEdit , FilePondPluginImageTransform)

     let pond;

     let filename ;

     let tab = [];

    export let name = "filepond";

    function handleInit(){
        console.log("File has initialised")
        // pond.addFile(file)
        
    }
    function handleAddFile(error , files){
    //    if(files.filename != JSON.parse(file)){
    //         filename = file.filename
    //    }
    //   JSON.parse(file).map((val) => {
    //         if(tab.indexOf(val) == -1){
    //             tab.push(val);
    //         }
    //   })
    //   console.log(files.filename)
        tab.push(files.filename);

        filename = JSON.stringify(tab)

        
    }
    
    function handleRemoveFile(error , files){
        console.log("File removed")

        tab = tab.filter(el => el != files.filename);
        console.log(tab)

        filename = JSON.stringify(tab)
    }
    
</script>

<div class="app">
    <input style="display:none;" type="text" name="file_update" id="" bind:value={filename} class="input_choose_file">

    <FilePond bind:this={pond} {name}
    server="/filepond"
    allowMultiple={true}
    oninit={handleInit}
    onaddfile={handleAddFile}
     maxFiles={10}
    onremovefile={handleRemoveFile}
    labelIdle="Glissez vos fichiers"
    labelProcessing="Chargement..."
    
    plugins={
        [
            FilePondPluginImagePreview
        ]
    }
    >
    </FilePond>


</div>
