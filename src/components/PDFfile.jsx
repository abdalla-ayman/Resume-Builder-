import {
  Document,
  Page,
  Text,
  Image,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import imgsrc from "../assets/gg.jpg";

const styles = StyleSheet.create({
  img: {
    width: 100,
  },
  Viewer: {
    width: "50vw",
    height: "100vh",
  },
  header: {},
});

function PDFfile({ state }) {
  const { personalDetails, summary, employemntHis } = state;
  return (
    <PDFViewer style={styles.Viewer}>
      <Document>
        <Page>
          <View>
            <Image src={imgsrc} style={styles.img} />
            <Text>
              {personalDetails.firstName + " " + personalDetails.lastName}
            </Text>
            <Text>{personalDetails.jobTitle}</Text>
          </View>
          <View>
            {personalDetails.address ||
            personalDetails.city ||
            personalDetails.country ? (
              <View>
                <Text>Address</Text>
                <View>
                  <Text>{personalDetails.address}</Text>
                  <Text>
                    {personalDetails.city + ", " + personalDetails.postalCode}
                  </Text>
                  <Text>{personalDetails.country}</Text>
                </View>
              </View>
            ) : null}
            {personalDetails.email ? (
              <View>
                <Text>Email</Text>
                <Text>{personalDetails.email}</Text>
              </View>
            ) : null}
            {personalDetails.phoneNumber ? (
              <View>
                <Text>Phone</Text>
                <Text>{personalDetails.phoneNumber}</Text>
              </View>
            ) : null}
          </View>

          {summary ? (
            <View>
              <Text>Profile</Text>
              <Text>{summary}</Text>
            </View>
          ) : null}
          {employemntHis
            ? employemntHis.map((emHis) => {
                if (emHis.jobTitle) {
                  return (
                    <View>
                      <Text>Employemnt History</Text>
                      <View>
                        <View>
                          <Text>{emHis.startDate + "-" + emHis.endDate}</Text>
                          <Text>{emHis.city}</Text>
                        </View>
                        <View>
                          <Text>
                            {emHis.jobTitle + " at " + emHis.employer}
                          </Text>
                          <Text>{emHis.description}</Text>
                        </View>
                      </View>
                    </View>
                  );
                } else return null;
              })
            : null}
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default PDFfile;
