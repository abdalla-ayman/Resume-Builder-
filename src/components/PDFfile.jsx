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
  Circle,
  Svg,
} from "@react-pdf/renderer";

import bgImgSrc from "../assets/bg.jpg";

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
    color: "white",
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
    width: "50%",
    paddingRight: 15,
  },
  infoSection: {
    marginHorizontal: 30,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  infoHeader: {
    width: 70,
  },
  infoData: {
    marginLeft: 8,
    width: 200,
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
  skill: {
    display: "flex",
    flexDirection: "row",
  },
  skillheader: {
    fontSize: 14,
    fontWeight: "thin",
    color: "black",
    width: 70,
  },
  lvl: {
    color: "black",
  },
  bgImage: {
    position: "absolute",
    minWidth: "100%",
    minHeight: "100%",
    display: "block",
    height: "100%",
    width: "100%",
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

  return (
    <PDFViewer width={900} height={1000}>
      <Document style={styles.doc}>
        <Page style={{ backgroundColor: "#EDEDED" }} size="LETTER">
          <Image src={bgImgSrc} style={styles.bgImage} fixed />
          <View style={styles.header}>
            {personalDetails.photo ? (
              <Image
                src={URL.createObjectURL(personalDetails.photo)}
                style={styles.img}
              />
            ) : personalDetails.firstName ? (
              <View
                style={{
                  ...styles.img,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#17996E",
                  borderColor: "black",
                  textAlign: "center",
                  fontSize: 50,
                }}
              >
                <Text>{personalDetails.firstName[0].toUpperCase()}</Text>
              </View>
            ) : null}
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
                <Text style={styles.infoHeader}>Address</Text>
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
                <Text style={styles.infoHeader}>Phone</Text>
                <Text style={styles.infoData}>
                  {personalDetails.phoneNumber}
                </Text>
              </View>
            ) : null}
            {personalDetails.email ? (
              <View style={styles.infoContainer}>
                <Text style={styles.infoHeader}>Email</Text>
                <Text style={styles.infoData}>{personalDetails.email}</Text>
              </View>
            ) : null}
            {links.length ? (
              <View style={styles.infoContainer}>
                <Text style={styles.infoHeader}>Links</Text>
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
              <Text style={styles.sectionHeader}>PROFILE </Text>
              <Text style={{ ...styles.sectionBody, marginTop: 15 }}>
                {summary}
              </Text>
            </View>
          ) : null}
          {employemntHis.length ? (
            <View style={styles.emSection}>
              <Text>EMPLOYMENT HOSTORY</Text>
              {employemntHis.map((em) => (
                <View style={styles.innerEmSection} wrap={false}>
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
              <Text> EDUCATION</Text>
              {Education.map((em) => (
                <View style={styles.innerEmSection} wrap={false}>
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

          {skills.length ? (
            <View style={styles.section} wrap={false}>
              <Text style={styles.sectionHeader}>SKILLS</Text>
              <View
                style={{
                  ...styles.sectionBody,
                  ...styles.skill,
                  marginVertical: 10,
                  flexWrap: "wrap",
                  justifyContent: "space-around",
                }}
              >
                {skills.map((skill) => (
                  <View
                    style={{
                      ...styles.skill,
                      marginRight: 20,
                      width: " 40%",
                      marginVertical: 10,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={styles.skillheader}>{skill.skill}</Text>
                    {skill.skill
                      ? Array.apply(null, { length: 5 }).map((e, i) => {
                          console.log(e, i, skill.lvl);
                          return (
                            <Svg
                              viewBox="0 0 100 100"
                              style={{
                                width: 10,
                                height: 10,
                              }}
                            >
                              <Circle
                                cx="50"
                                cy="50"
                                r="20"
                                fill={i < skill.lvl ? "black" : "#C8C8C8"}
                                stroke={i < skill.lvl ? "black" : "#C8C8C8"}
                              />
                            </Svg>
                          );
                        })
                      : null}
                  </View>
                ))}
              </View>
            </View>
          ) : null}
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default PDFfile;
