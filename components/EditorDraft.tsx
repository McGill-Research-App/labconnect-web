import { Box } from "@chakra-ui/react";
import { EditorState } from "draft-js";
import dynamic from "next/dynamic";
import React from "react";
import { EditorProps } from "react-draft-wysiwyg";

const Editor = dynamic<EditorProps>(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

const EditorDraft = (props: EditorProps) => {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  const handleEditorStateChange = (newEditorState: EditorState) => {
    setEditorState(newEditorState);
    console.log(newEditorState);
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" p={2} h="25vh">
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={handleEditorStateChange}
        onChange={(rawDraftContentState) => console.log(rawDraftContentState)}
        placeholder={props.placeholder}
        toolbar={{
          options: [
            "inline",
            "blockType",
            "fontSize",
            "fontFamily",
            "list",
            "textAlign",
            "colorPicker",
            "link",
            "embedded",
            "emoji",
            "image",
            "remove",
            "history",
          ],
          inline: {
            options: [
              "bold",
              "italic",
              "underline",
              "strikethrough",
              "monospace",
            ],
          },
          list: {
            inDropdown: true,
            options: ["unordered", "ordered", "indent", "outdent"],
          },
          textAlign: {
            inDropdown: true,
          },
          link: {
            inDropdown: true,
            options: ["link", "unlink"],
          },
          emoji: {
            emojis: ["😀", "😁", "😂", "😃", "😉", "😋", "😎", "😍"],
          },
        }}
      ></Editor>
    </Box>
  );
};

export default EditorDraft;

// class MyEditor extends Component {
//   constructor(props: any) {
//     super(props);
//     this.state = { placeholder: "", editorState: EditorState.createEmpty() };
//   }

//   onEditorStateChange = (editorState: EditorState) => {
//     this.setState({ editorState });
//   };

//   render() {
//     const { editorState } = this.state;

//     return (
//       <div>
//         <Editor
//           editorState={editorState}
//           wrapperClassName="rich-editor demo-wrapper"
//           editorClassName="demo-editor"
//           onEditorStateChange={this.onEditorStateChange}
//           placeholder={this.state.placeholder}
//         />
//       </div>
//     );
//   }
// }
//
// export default MyEditor;
