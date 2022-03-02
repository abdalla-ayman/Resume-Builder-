import {
  View,
  Text,
  Document,
  Page,
  Font,
  Image,
  StyleSheet,
  PDFViewer,
  Link,
} from "@react-pdf/renderer";

import imgSrc from "../assets/gg.jpg";

Font.register({
  family: "Ubuntu",
  fonts: [
    {
      src:
        "https://fonts.gstatic.com/s/questrial/v13/QdVUSTchPBm7nuUeVf7EuStkm20oJA.ttf",
    },
    {
      src:
        "https://fonts.gstatic.com/s/questrial/v13/QdVUSTchPBm7nuUeVf7EuStkm20oJA.ttf",
      fontWeight: "bold",
    },
    {
      src:
        "https://fonts.gstatic.com/s/questrial/v13/QdVUSTchPBm7nuUeVf7EuStkm20oJA.ttf",
      fontWeight: "normal",
      fontStyle: "italic",
    },
  ],
});

const styles = StyleSheet.create({
  doc: {
    fontFamily: "Ubuntu",
    fontSize: 24,
  },
  img: {
    width: 100,
    height: 100,
    border: 3,
    borderColor: "black",
    borderRadius: "50%",
    marginBottom: 10,
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginVertical: 20,
  },
  subText: {
    fontSize: 16,
    color: "#444",
    marginTop: 7,
  },
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    fontSize: 12,
  },
  infoSection: {
    marginHorizontal: 30,
  },
  infoData: {
    marginLeft: 20,
  },
  section: {
    marginHorizontal: 30,
    marginVertical: 30,
    display: "flex",
    flexDirection: "row",
    fontSize: 16,
  },
  sectionBody: {
    fontSize: 12,
    color: "#333",
    width: "70%",
  },
  sectionHeader: {
    width: "30%",
    marginTop: 10,
  },
  emSection: {
    marginHorizontal: 30,
    marginVertical: 30,
    fontSize: 16,
  },
  innerEmSection: {
    marginVertical: 20,
    display: "flex",
    flexDirection: "row",
    fontSize: 16,
  },
  links: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

function PDFfile({ state }) {
  const {
    personalDetails,
    summary,
    employemntHis,
    Education,
    skills,
    links,
  } = state;
  console.log(employemntHis.length);
  return (
    <PDFViewer width={900} height={1000}>
      <Document style={styles.doc}>
        <Page>
          <View style={styles.header}>
            <Image src={imgSrc} style={styles.img} />
            <Text>
              {personalDetails.firstName + " " + personalDetails.lastName}
            </Text>
            <Text style={styles.subText}>{personalDetails.jobTitle}</Text>
          </View>

          <View style={styles.infoSection}>
            {personalDetails.address ||
            personalDetails.city ||
            personalDetails.country ? (
              <View style={styles.infoContainer}>
                <Text>Address</Text>
                <View style={styles.infoData}>
                  <Text>{personalDetails.address}</Text>
                  <Text>
                    {personalDetails.city + " ," + personalDetails.postalCode}
                  </Text>
                  <Text>{personalDetails.country}</Text>
                </View>
              </View>
            ) : null}
            {personalDetails.phoneNumber ? (
              <View style={styles.infoContainer}>
                <Text>Phone</Text>
                <Text style={styles.infoData}>
                  {personalDetails.phoneNumber}
                </Text>
              </View>
            ) : null}
            {personalDetails.email ? (
              <View style={styles.infoContainer}>
                <Text>Email</Text>
                <Text style={styles.infoData}>{personalDetails.email}</Text>
              </View>
            ) : null}
            {links.length ? (
              <View style={styles.infoContainer}>
                <Text>Links</Text>
                <View style={{ ...styles.infoData, ...styles.links }}>
                  {links.map((link) => {
                    return (
                      <Link style={{ marginHorizontal: 5 }} src={link.link}>
                        {link.label}
                      </Link>
                    );
                  })}
                </View>
              </View>
            ) : null}
          </View>

          {summary ? (
            <View style={styles.section}>
              <Text style={styles.sectionHeader}>01 PROFILE </Text>
              <Text style={styles.sectionBody}>{summary}</Text>
            </View>
          ) : null}
          {employemntHis.length ? (
            <View style={styles.emSection}>
              <Text>02 EMPLOYMENT HOSTORY</Text>
              {employemntHis.map((em) => (
                <View style={styles.innerEmSection}>
                  <View style={{ ...styles.sectionHeader, fontSize: 12 }}>
                    <Text>{em.startDate + "---" + em.endDate}</Text>
                    <Text style={{ color: "#555" }}>{em.city}</Text>
                  </View>
                  <View style={styles.sectionBody}>
                    <Text
                      style={{ fontSize: 14, color: "black", marginBottom: 10 }}
                    >
                      {em.jobTitle + " At " + em.employer}
                    </Text>
                    <Text>{em.description}</Text>
                  </View>
                </View>
              ))}
            </View>
          ) : null}

          {Education.length ? (
            <View style={styles.emSection}>
              <Text>02 EMPLOYMENT HOSTORY</Text>
              {Education.map((em) => (
                <View style={styles.innerEmSection}>
                  <View style={{ ...styles.sectionHeader, fontSize: 12 }}>
                    <Text>{em.startDate + "---" + em.endDate}</Text>
                    <Text style={{ color: "#555" }}>{em.city}</Text>
                  </View>
                  <View style={styles.sectionBody}>
                    <Text style={{ fontSize: 14, color: "black" }}>
                      {em.school}
                    </Text>
                    <Text style={{ marginBottom: 10, marginTop: 3 }}>
                      {em.degree}
                    </Text>
                    <Text>{em.description}</Text>
                  </View>
                </View>
              ))}
            </View>
          ) : null}
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default PDFfile;
