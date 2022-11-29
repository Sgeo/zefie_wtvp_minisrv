var minisrv_service_file = true;

var foldername = request_headers.query.new_folder_name;
var favstore_exists = session_data.favstore.favstoreExists();
var folder_exists = session_data.favstore.folderExists(foldername);
var folder_array = session_data.favstore.getFolders();

if (foldername)
{
	if (favstore_exists != true)
		session_data.favstore.createFavstore();
	
	if (folder_exists != true)
	{
		if (folder_array.length < minisrv_config.services[service_name].max_folders)
		{
			//if (session_data.favstore.checkFolderName(foldername) == true)
			//{
				session_data.favstore.createFolder(foldername);
				headers = `300 OK
Connection: Keep-Alive
Content-Type: text/html
Location: wtv-favorite:/favorite
wtv-expire-all: wtv-favorite:`
			//} else {
			//	headers = `400 That folder name is not valid. Choose a different name and try again.`
			//}
		} else {
			headers = `400 You can only have ${minisrv_config.services[service_name].max_folders} folders at one time. Delete some folders and try again.`
		}
	} else {
		headers = `400 That folder already exists. Choose a different name and try again.`
	}
} else {
	headers = `400 Please type a folder name.`
}
