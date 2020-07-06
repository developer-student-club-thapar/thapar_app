import requests
import os


def download_file(id, destination):
    URL = "https://docs.google.com/uc?export=download"
    session = requests.Session()
    response = session.get(URL, params={'id': id}, stream=True)
    save_response_content(response, destination)
    print("Downloaded {}".format(id))


def save_response_content(response, destination):
    CHUNK_SIZE = 32768
    with open(destination, "wb") as f:
        for chunk in response.iter_content(CHUNK_SIZE):
            if chunk: # filter out keep-alive new chunks
                f.write(chunk)


if __name__ == "__main__":
    try:
        file_id = '1nxiOo81cedGWTmyeMvVtjUOV0MokShuZ'
        folder_path = '/Users/sanchitjain/Desktop'
        file_name = 'abcd.pdf'
        download_file(file_id, os.path.join(folder_path, file_name))
    except:
        print("Could not download file", file_id, file_name)