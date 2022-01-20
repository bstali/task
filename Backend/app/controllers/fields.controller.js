
const result = [
  {
  "_id": "cc4cb134-fda0-44d8-8e92-e42ebbceb415",
  "label": "Client Name",
  "name":"name",
  "type": "Text",
  "maxLength": 100,
  "componentName": "inputField"
  },
  {
    "_id": "228b905f-4a43-4a40-b829-0c6a04ad4782",
    "label":"Client Age",
    "name": "age",
    "type": "number",
    "componentName": "inputField"
    },
  {
    "_id": "228b905f-4a43-4a40-b829-0c6a04ad47",
    "label":"save",
    "name": "save",
    "componentName": "button"
    }
  ]

  exports.allFields = async (req, res) => {
    
      res.json(result);
  
  };