var minisrv_service_file = true;

headers = `200 OK
Connection: Keep-Alive
wtv-expire-all: wtv-
wtv-expire-all: http
Content-Type: text/html`

data = `<HTML>
<HEAD>
<TITLE>
Television
</TITLE>
<DISPLAY >
</HEAD>
<sidebar width=110> <table cellspacing=0 cellpadding=0 BGCOLOR=452a36>
<tr>
<td colspan=3 abswidth=104 absheight=4>
<td rowspan=99 width=6 absheight=420 valign=top align=left>
<img src="wtv-home:/ROMCache/Shadow.gif" width=6 height=420>
<tr>
<td abswidth=6>
<td abswidth=92 absheight=76>
<table href="wtv-home:/home" absheight=76 cellspacing=0 cellpadding=0>
<tr>
<td align=right>
<img src="${minisrv_config.config.service_logo}" width=87 height=67>
</table>
<td abswidth=6>
<tr><td absheight=5 colspan=3>
<table cellspacing=0 cellpadding=0>
<tr><td abswidth=104 absheight=2 valign=middle align=center bgcolor=2e1e26>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<tr><td abswidth=104 absheight=1 valign=top align=left>
<tr><td abswidth=104 absheight=2 valign=top align=left bgcolor=6b4657>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
</table>
<tr><td absheight=132>
<tr><td absheight=166 align=right colspan=3>
<img src="ROMCache/SettingsBanner.gif" width=54 height=166>
<tr><td absheight=41>
</table>
</sidebar>
<BODY BGCOLOR="#191919" TEXT="#42CC55" LINK="36d5ff" VLINK="36d5ff" FONTSIZE="large"
hspace=0 vspace=0>            
<table cellspacing=0 cellpadding=0>
<tr>
<td abswidth=14>
<td colspan=3>
<table cellspacing=0 cellpadding=0>
<tr>
<td valign=center absheight=80>
<font size="+2" color="E7CE4A"><blackface><shadow>
Television
</table>
<td abswidth=20>
<tr>
<TD>
<td colspan=3 height=2 valign=middle align=center bgcolor="2B2B2B">
<spacer type=block width=436 height=1>
<tr>
<TD>
<td colspan=3 height=1 valign=top align=left>
<tr>
<TD>
<td colspan=3 height=2 valign=top align=left bgcolor="0D0D0D">
<spacer type=block width=436 height=1>
<td abswidth=20>
<TR>
<td>
<spacer type=block height=24 width=1>
<td WIDTH=200 HEIGHT=244 VALIGN=top ALIGN=left>
<br><font size="-1">
<A HREF="wtv-setup:/center-display" selected><BLACKFACE>Center</BLACKFACE></A><BR>
<FONT SIZE="-1">Center WebTV on your screen</FONT><BR>`;

// old classic apparently can do Screen Border
if (ssid_sessions[socket.ssid].get("wtv-client-rom-type") == "bf0app") {
    data += `<spacer type=block width=1 height=5><BR>
<A HREF="wtv-setup:/screen-border" selected><BLACKFACE>Border</BLACKFACE></A><BR>
<FONT SIZE="-1">Change the color of the screen border</FONT><BR>`;
}

data += `
<TD WIDTH=20>
<TD WIDTH=500 VALIGN=top ALIGN=left>
<spacer type=block width=15 height=14> <font size="2"><br>
<A HREF="wtv-setup:/adjust-display-intro"><BLACKFACE>Picture</BLACKFACE></A><BR>
<FONT SIZE="-1">Adjust brightness, contrast, and sharpness</FONT><BR>
<TD>
<TR>
<TD>
<TD COLSPAN=4 HEIGHT=2 VALIGN=top ALIGN=left>
<tr>
<TD>
<td colspan=3 height=2 valign=middle align=center bgcolor="2B2B2B">
<img src="wtv-home:/ROMCache/Spacer.gif" width=436 height=1>
<tr>
<TD>
<td colspan=4 height=1 valign=top align=left>
<tr>
<TD>
<td colspan=3 height=2 valign=top align=left bgcolor="0D0D0D">
<img src="wtv-home:/ROMCache/Spacer.gif" width=436 height=1>
<TR>
<TD>
<TD COLSPAN=4 HEIGHT=4 VALIGN=top ALIGN=left>
<TR>
<TD>
<TD COLSPAN=3 VALIGN=top ALIGN=right>
<FORM
action="wtv-setup:/setup">
<FONT COLOR="#E7CE4A" SIZE=-1><SHADOW>
<INPUT TYPE=SUBMIT BORDERIMAGE="file://ROM/Borders/ButtonBorder2.bif" Value=Done NAME="Done" USESTYLE WIDTH=103>
</SHADOW></FONT></FORM>
<TD>
</TABLE>
      </BODY>
</HTML>
`;