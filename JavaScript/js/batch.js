function commandSelection_Batch() {
    document.getElementById("batchclose").style.visibility = "visible";
    document.getElementById("batchclear").style.visibility = "visible";
    if (command_Batch.value != "B00") {
        document.getElementById("batchclose").style.visibility = "hidden";
    }
    if (command_Batch.value != "B04") {
        document.getElementById("batchclear").style.visibility = "hidden";
    }
}

function batchStart() {
    if (command_Batch.value == "B00")
        return BATCHCLOSE(
            command_Batch.value,
            document.getElementById("timestamp_Batchclose").value
        )
    if (command_Batch.value == "B04")
        return BATCHCLEAR(
            command_Batch.value,
            document.getElementById("batchclear").value
        )
}

function BATCHCLOSE(comm, timestamp){
    result = stx + comm + fs + version + fs + timestamp + fs + etx;
    str = toBase64(result + getlrc(result));
    return str;
}

function BATCHCLEAR(comm, edcType){
    result = stx + comm + fs + version + fs + edcType + etx;
    str = toBase64(result + getlrc(result));
    return str;
}