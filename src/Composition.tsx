import { Audio } from "@remotion/media";
import {
  AbsoluteFill,
  Composition,
  interpolate,
  Sequence,
  staticFile,
  useCurrentFrame,
} from "remotion";

const ink = "#171713";
const paper = "#f4f0e6";
const lime = "#ccff52";
const orange = "#ff6848";

const Scene: React.FC<{
  tag: string;
  title: React.ReactNode;
  visual: React.ReactNode;
  note: string;
  accent?: string;
}> = ({ tag, title, visual, note, accent = lime }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        alignItems: "center",
        backgroundColor: paper,
        color: ink,
        fontFamily: "Arial, sans-serif",
        justifyContent: "center",
        opacity,
        padding: "95px 76px 115px",
      }}
    >
      <div
        style={{
          alignItems: "center",
          alignSelf: "stretch",
          display: "flex",
          justifyContent: "space-between",
          position: "absolute",
          top: 74,
        }}
      >
        <div style={{ fontSize: 21, fontWeight: 900, letterSpacing: "0.12em" }}>
          REAL LIFE™
        </div>
        <div
          style={{
            backgroundColor: ink,
            borderRadius: 99,
            color: paper,
            fontSize: 17,
            fontWeight: 800,
            letterSpacing: "0.08em",
            padding: "11px 18px",
          }}
        >
          {tag}
        </div>
      </div>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          gap: 48,
          maxWidth: 920,
          textAlign: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            fontFamily: '"Arial Black", Impact, sans-serif',
            fontSize: 103,
            fontWeight: 900,
            letterSpacing: "-0.065em",
            lineHeight: 0.99,
          }}
        >
          {title}
        </div>
        {visual}
        <div
          style={{
            backgroundColor: accent,
            border: `3px solid ${ink}`,
            borderRadius: 14,
            boxShadow: `7px 7px 0 ${ink}`,
            fontSize: 28,
            fontWeight: 800,
            lineHeight: 1.2,
            padding: "16px 25px",
          }}
        >
          {note}
        </div>
      </div>
      <div
        style={{
          backgroundColor: "rgba(23,23,19,0.14)",
          bottom: 65,
          height: 7,
          left: 76,
          position: "absolute",
          right: 76,
        }}
      >
        <div
          style={{
            backgroundColor: orange,
            height: "100%",
            width: `${interpolate(frame, [0, 90], [0, 100], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            })}%`,
          }}
        />
      </div>
    </AbsoluteFill>
  );
};

const Phone: React.FC = () => (
  <div
    style={{
      backgroundColor: ink,
      border: "8px solid #35352e",
      borderRadius: 42,
      boxShadow: "12px 14px 0 rgba(23,23,19,0.16)",
      height: 430,
      padding: 24,
      width: 268,
    }}
  >
    <div
      style={{
        alignItems: "center",
        backgroundColor: "#30302a",
        borderRadius: 26,
        color: paper,
        display: "flex",
        flexDirection: "column",
        gap: 14,
        height: "100%",
        justifyContent: "center",
      }}
    >
      <div style={{ fontSize: 24, fontWeight: 800 }}>11:48 PM</div>
      <div style={{ display: "flex", fontSize: 56, gap: 12 }}>📱 🔔</div>
      <div style={{ color: "#c3c3b7", fontSize: 18 }}>just one more video</div>
      <div
        style={{
          backgroundColor: orange,
          borderRadius: 20,
          color: ink,
          fontSize: 16,
          fontWeight: 900,
          padding: "8px 14px",
        }}
      >
        47 NEW NOTIFICATIONS
      </div>
    </div>
  </div>
);

const Clock: React.FC = () => (
  <div
    style={{
      alignItems: "center",
      backgroundColor: ink,
      border: `12px solid ${orange}`,
      borderRadius: 250,
      boxShadow: "12px 14px 0 rgba(23,23,19,0.14)",
      color: paper,
      display: "flex",
      flexDirection: "column",
      height: 410,
      justifyContent: "center",
      width: 410,
    }}
  >
    <div style={{ color: lime, fontSize: 22, fontWeight: 900 }}>TIME CHECK</div>
    <div
      style={{
        fontFamily: '"Arial Black", Impact, sans-serif',
        fontSize: 112,
        fontWeight: 900,
        letterSpacing: "-0.07em",
      }}
    >
      11:48
    </div>
    <div style={{ color: "#c9c5b8", fontSize: 22 }}>PM. AGAIN.</div>
  </div>
);

const LoadingWindow: React.FC = () => (
  <div
    style={{
      backgroundColor: "#fffdf7",
      border: `5px solid ${ink}`,
      borderRadius: 16,
      boxShadow: `12px 12px 0 ${ink}`,
      maxWidth: 700,
      overflow: "hidden",
      textAlign: "left",
      width: "100%",
    }}
  >
    <div
      style={{
        alignItems: "center",
        backgroundColor: ink,
        color: paper,
        display: "flex",
        fontSize: 20,
        fontWeight: 800,
        justifyContent: "space-between",
        padding: "16px 22px",
      }}
    >
      <span>motivation.exe</span>
      <span style={{ color: orange }}>×</span>
    </div>
    <div style={{ alignItems: "center", display: "flex", gap: 22, padding: 28 }}>
      <div style={{ fontSize: 68 }}>🫠</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 26, fontWeight: 900 }}>Still loading...</div>
        <div
          style={{
            backgroundColor: "#ddd9cf",
            height: 22,
            marginTop: 18,
            padding: 4,
          }}
        >
          <div style={{ backgroundColor: orange, height: "100%", width: "3%" }} />
        </div>
      </div>
      <div style={{ fontSize: 24, fontWeight: 900 }}>3%</div>
    </div>
    <div
      style={{
        color: "#76746c",
        fontSize: 17,
        padding: "0 30px 22px",
        textAlign: "center",
      }}
    >
      You can keep waiting. It’s not coming.
    </div>
  </div>
);

const TimerCard: React.FC = () => (
  <div
    style={{
      alignItems: "center",
      backgroundColor: lime,
      border: `5px solid ${ink}`,
      borderRadius: 28,
      boxShadow: `12px 12px 0 ${ink}`,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "32px 70px",
    }}
  >
    <div style={{ fontSize: 18, fontWeight: 900, letterSpacing: "0.18em" }}>
      DO THE TINIEST START
    </div>
    <div
      style={{
        fontFamily: '"Arial Black", Impact, sans-serif',
        fontSize: 134,
        fontWeight: 900,
        letterSpacing: "-0.07em",
        lineHeight: 1,
      }}
    >
      05:00
    </div>
    <div style={{ fontSize: 23, fontWeight: 800 }}>that’s literally it</div>
  </div>
);

const MemeVideo: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: paper }}>
    <Sequence durationInFrames={90}>
      <Scene
        tag="THE PLAN"
        title={
          <>
            ME: “ONE QUICK
            <br />
            SCROLL.”
          </>
        }
        visual={<Phone />}
        note="I’ll start in 5 minutes."
      />
    </Sequence>
    <Sequence from={90} durationInFrames={90}>
      <Scene
        tag="PLOT TWIST"
        title={
          <>
            ALSO ME:
            <br />
            3 HOURS LATER
          </>
        }
        visual={<Clock />}
        note="The task is still untouched."
        accent={orange}
      />
    </Sequence>
    <Sequence from={180} durationInFrames={90}>
      <Scene
        tag="MOTIVATION.EXE"
        title={
          <>
            WAITING FOR
            <br />
            THE VIBE…
          </>
        }
        visual={<LoadingWindow />}
        note="Status: not happening."
      />
    </Sequence>
    <Sequence from={270} durationInFrames={90}>
      <Scene
        tag="THE HACK"
        title={
          <>
            FINE.
            <br />
            JUST 5 MINUTES.
          </>
        }
        visual={<TimerCard />}
        note="No vibe required. Just start."
      />
    </Sequence>
    <Audio src={staticFile("record-scratch.wav")} from={0} volume={0.5} />
    <Audio src={staticFile("vine-boom.wav")} from={90} volume={0.75} />
    <Audio src={staticFile("loading-lag.wav")} from={180} volume={0.6} />
    <Audio src={staticFile("ding.wav")} from={270} volume={0.65} />
  </AbsoluteFill>
);

export const MyComposition = () => {
  return (
    <Composition
      id="KineticReset"
      component={MemeVideo}
      durationInFrames={360}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
