import { useEffect, useRef } from "react";
import "./App.css";

export default function App() {
  const drumRef = useRef(null);

  useEffect(() => {
    const drum = drumRef.current;
    if (!drum) return;

    const spans = drum.querySelectorAll("span");
    const DWELL = 2500;
    const SLIDE_MS = 600;

    function rowHeight() {
      return parseFloat(getComputedStyle(spans[0]).fontSize) * 1.1;
    }

    /*
      Drum order (index → word):
      0: Stagnant     ← top clone (for seamless wrap)
      1: Inefficient
      2: Outdated
      3: Deprecated
      4: Stagnant
      5: Inefficient  ← bottom clone (for seamless wrap)

      Cycle: Inefficient → Outdated → Deprecated → Stagnant → Inefficient → ...
    */

    let drumIndex = 1; // start on Inefficient

    function applyTransform(index, animated) {
      const y = -(index - 1) * rowHeight();
      drum.style.transition = animated
        ? `transform ${SLIDE_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`
        : "none";
      drum.style.transform = `translateY(${y}px)`;
    }

    function lightUp(index) {
      spans.forEach((s) => s.classList.remove("lit"));
      spans[index].classList.add("lit");
    }

    applyTransform(drumIndex, false);
    lightUp(drumIndex);

    function advance() {
      drumIndex++;

      applyTransform(drumIndex, true);
      lightUp(drumIndex);

      // When we land on index 5 (bottom Inefficient clone),
      // silently jump back to index 1 (real Inefficient) after transition ends
      if (drumIndex === spans.length - 1) {
        setTimeout(() => {
          drumIndex = 1;
          applyTransform(drumIndex, false);
          lightUp(drumIndex);
        }, SLIDE_MS + 20);
      }
    }

    const interval = setInterval(advance, DWELL);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card">
      <div className="top-row">
        <p className="label">
          Education is not broken. Its measurement system is :
        </p>
        <div className="drum-wrapper">
          <div className="drum" ref={drumRef}>
            <span>Stagnant</span>
            <span>Inefficient</span>
            <span>Outdated</span>
            <span>Deprecated</span>
            <span>Stagnant</span>
            <span>Inefficient</span>
          </div>
        </div>
      </div>

      <div className="caption">
        <span className="caption-regular">
          Ateion replaces memory-based validation with
        </span>
        <span className="caption-bold">
          Capability-based intelligence.
        </span>
      </div>
    </div>
  );
}
