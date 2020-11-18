import handler from './libs/handler-lib';
import dynamoDb from './libs/dynamodb-lib';

export const main=handler( async function(event,context){
 const params={
   TableName:process.env.tableName,
   Key:{
     userId:"USER-SUB-1234",
     noteId: event.pathParameters.id
   }
 };
 await dynamoDb.delete(params);
 return { status:true };
});