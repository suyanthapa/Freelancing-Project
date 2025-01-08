import { model, Schema } from "mongoose";

const metaDataSchema = new Schema ({

  source : {
    type: String,
    default: ""
  },
  updatedBy : {
    type: String,
    default: ""
  }
})

const libraryMetadata =  model ("libraryMetadata", metaDataSchema);

async function getMetadata() {

  let existingRow = await libraryMetadata.findOne({})

  if(!existingRow){
    existingRow = await libraryMetadata.create({});
    console.log("New metadata instance created");
  }
  return existingRow;
}

async function updateMetadata({updatedBy, source}) {

  const existingRow = await getMetadata();

  //to update the row
  existingRow.updatedBy = updatedBy;
  existingRow.source = source;
  await existingRow.save();

  return existingRow;
}

export { libraryMetadata, updateMetadata,getMetadata}